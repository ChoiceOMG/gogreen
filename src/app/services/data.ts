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
