import { Id } from 'react-toastify';
import prisma from '../db/client';
import { unstable_noStore as noStore } from 'next/cache';

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
  const offset = (Number(page) - 1) * limit;
  if (categoryLink === 'all') categoryLink = undefined;
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        date: 'desc'
      },
      skip: offset,
      take: limit,
      where: {
        status: onlyPublished ? 'Publish' : undefined,
        category: categoryLink ? { link: categoryLink } : undefined,
        title: query ? { contains: query, mode: 'insensitive' } : undefined
      },
      include: {
        category: true
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
        category: true
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
      where: { category: category ? { link: category } : undefined }
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
        category: true
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
        category: true
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
        categoryId: {
          equals: categoryId
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
        category: true
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
    console.log('categories', categories);
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
