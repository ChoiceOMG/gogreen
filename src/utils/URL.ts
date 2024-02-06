/* This file with all the urls in the header and in the footer  */

import { MenuItem } from '../types/types';

export const MenuHeader: MenuItem[] = [
  {
    name: 'About Us',
    link: '/about'
  },
  {
    name: 'Services and Industries',
    link: '/services'
  },
  {
    name: 'Blog',
    link: '/blog'
  },
  {
    name: 'Contact Us',
    link: '/contact'
  }
];

export const MenuFooter: MenuItem[] = [
  {
    name: 'About Us',
    link: '/about'
  },
  {
    name: 'Services and Industries',
    link: '/services'
  },
  {
    name: 'Blog',
    link: '/blog'
  },
  {
    name: 'Contact Us',
    link: '/contact'
  },
  {
    name: 'Privacy Policy',
    link: '/privacy'
  },
  {
    name: 'Terms and Conditions',
    link: '/terms'
  }
];

/* Admin Urls */

export const MenuAdmin: MenuItem[] = [
  {
    name: 'Account',
    link: '/admin/account'
  },
  {
    name: 'Articles',
    link: '/admin/articles'
  }
];
