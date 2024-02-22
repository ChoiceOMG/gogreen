/* This file with all the urls in the header and in the footer  */

import { MenuItem } from '../types/types';
import { _industries, _services } from './constants';

export const MenuHeader: MenuItem[] = [
  {
    title: 'Blog',
    link: '/blog'
  }
];

export const MenuHeaderMobile: MenuItem[] = [
  {
    title: 'About Us',
    link: '/about',
    subMenu: [
      {
        title: 'Why Go Green',
        link: '/why-us'
      },
      {
        title: 'Our History',
        link: '/our-journey'
      },
      {
        title: 'Our Technologies',
        link: '/our-technologies'
      }
    ]
  },
  {
    title: 'Services and Industries',
    link: '/services',
    subMenu: [..._services, ..._industries]
  },

  {
    title: 'Blog',
    link: '/blog'
  }
];

export const MenuFooter: MenuItem[] = [
  {
    title: 'About Us',
    link: '/about'
  },
  {
    title: 'Services and Industries',
    link: '/services'
  },
  {
    title: 'Blog',
    link: '/blog'
  },
  {
    title: 'Contact Us',
    link: '/contact'
  },
  {
    title: 'Privacy Policy',
    link: '/privacy'
  },
  {
    title: 'Terms and Conditions',
    link: '/terms'
  }
];

/* Admin Urls */

export const MenuAdmin: MenuItem[] = [
  {
    title: 'Account',
    link: '/admin/account'
  },
  {
    title: 'Articles',
    link: '/admin/articles'
  },
  {
    title: 'Categories',
    link: '/admin/categories'
  }
];
