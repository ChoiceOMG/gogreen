import prisma from '@/app/db/client';
import { GoogleReview } from '@/types/types';
import { unstable_noStore as noStore } from 'next/cache';
import fs from 'fs';
import path from 'path';
import NodeCache from 'node-cache';
import axios from 'axios';
const ITEMS_PER_PAGE = 9;

/* Article */

export async function getArticles() {
  noStore();

  try {
    const Articles = await prisma.article.findMany({
      orderBy: {
        date: 'desc'
      }
    });
    console.log('Articles', Articles);
    return Articles;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getArticlesByPage(
  page: number,
  categoryLink?: string,
  query?: string,
  onlyPublished: boolean = true,
  limit: number = ITEMS_PER_PAGE
) {
  noStore();
  const pageNumber = Number(page);
  if (isNaN(pageNumber)) {
    throw new Error('Invalid page number');
  }
  const offset = (pageNumber - 1) * limit;

  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        date: 'desc'
      },
      skip: offset,
      take: limit,
      where: {
        status: onlyPublished ? 'Publish' : undefined,
        title: query ? { contains: query, mode: 'insensitive' } : undefined,
        categories: {
          some: categoryLink
            ? {
                category: {
                  link: categoryLink
                }
              }
            : {}
        }
      },
      include: {
        categories: {
          include: {
            category: true
          }
        }
      }
    });
    return articles;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getArticlesLast() {
  noStore();
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        date: 'desc'
      },
      take: 3,
      include: {
        categories: {
          include: {
            category: true
          }
        }
      }
    });
    return articles;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTotalArticlesPages(category?: string) {
  noStore();
  try {
    const articlesCount = await prisma.article.count({
      where: {
        categories: category
          ? { some: { category: { link: category } } }
          : undefined
      }
    });
    const totalPages = Math.ceil(Number(articlesCount) / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getArticle(URL: string) {
  try {
    const article = await prisma.article.findUnique({
      where: { URL: URL },
      include: {
        categories: {
          include: {
            category: true
          }
        }
      }
    });

    return article;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getArticlesLatest() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        date: 'desc'
      },
      take: 3,
      include: {
        categories: {
          include: {
            category: true
          }
        }
      }
    });
    return articles;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getArticlesByCategory(categoryId: number) {
  try {
    const articles = await prisma.article.findMany({
      where: {
        categories: {
          some: {
            categoryId: categoryId
          }
        }
      }
    });
    return articles;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getArticlesByCount(count: number) {
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        date: 'desc'
      },
      take: count,
      include: {
        categories: {
          include: {
            category: true
          }
        }
      }
    });
    return articles;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/* Cetegories */

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany();

    return categories;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCategory(link: string) {
  try {
    const category = await prisma.category.findUnique({
      where: { link: link }
    });
    return category;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/* Admin */

export async function getUser(id: string) {
  return await prisma.user.findUnique({
    where: { id: id }
  });
}

/* Reviews */

const PLACE_ID = process.env.PLACE_ID;
const API_KEY = process.env.GOOGLE_API_KEY;

const CACHE_TTL = 7 * 86400; // 7 days
const myCache = new NodeCache({ stdTTL: CACHE_TTL });

const REVIEWS_FILE_PATH = path.join(process.cwd(), 'reviews.json');
async function fetchReviews() {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {
      return response.data.result.reviews;
    } else {
      throw new Error('Error fetching reviews from Google API');
    }
  } catch (error) {
    console.error('Error fetching reviews', error);
    return null;
  }
}

async function saveNewReviews(reviews: GoogleReview[]) {
  let existingReviews = [];

  // Read existing reviews from file
  if (fs.existsSync(REVIEWS_FILE_PATH)) {
    const data = fs.readFileSync(REVIEWS_FILE_PATH, 'utf-8');
    existingReviews = JSON.parse(data).reviews;
  }

  // Filter out reviews that are already saved
  const newReviews: GoogleReview[] = reviews.filter(
    (review: GoogleReview) =>
      !existingReviews.some(
        (existingReview: GoogleReview) => existingReview.time === review.time
      )
  );

  if (newReviews.length > 0) {
    const updatedReviews = [...existingReviews, ...newReviews];

    fs.writeFileSync(
      REVIEWS_FILE_PATH,
      JSON.stringify({ reviews: updatedReviews }, null, 2),
      'utf-8'
    );

    console.log('New reviews saved to file');
  } else {
    console.log('No new reviews to save');
  }
}

async function getReviewsFromFile() {
  if (fs.existsSync(REVIEWS_FILE_PATH)) {
    const data = fs.readFileSync(REVIEWS_FILE_PATH, 'utf-8');

    return JSON.parse(data).reviews;
  } else {
    return [];
  }
}

export async function GetReviews() {
  try {
    let cachedData = myCache.get('reviewsData');
    if (!cachedData) {
      const fetchedData = await fetchReviews();

      if (fetchedData) {
        await saveNewReviews(fetchedData.reviews);
        cachedData = {
          reviews: fetchedData.reviews
        };
        myCache.set('reviewsData', cachedData);
      }
    } else {
      console.log('Data from cache');
    }

    const reviews = await getReviewsFromFile();

    // Filter reviews with a rating of 4 or higher
    const filteredReviews =
      (cachedData as { reviews: GoogleReview[] }).reviews?.filter(
        (review: GoogleReview) => review.rating >= 4
      ) || reviews.filter((review: GoogleReview) => review.rating >= 4);

    return {
      reviews: filteredReviews
    };
  } catch (error) {
    console.error('Error fetching reviews', error);
    return {
      reviews: []
    };
  }
}
