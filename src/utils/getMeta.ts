import { _siteUrl } from './constants';

interface PageMeta {
  title: string;
  description: string;
}

export const getPageMeta = (slug: string): PageMeta => {
  let title = '';
  let description = '';

  // Logic to find the title and description based on the slug
  switch (slug) {
    case '/':
      title = 'GoGreen';
      description = '';
      break;

    default:
      title = '404';
      description = '404 page';
      break;
  }

  return { title, description };
};
