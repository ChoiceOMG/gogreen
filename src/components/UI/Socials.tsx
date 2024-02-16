import React from 'react';

import { MailIcon } from './SVG/MailIcon';
import { PhoneIcon } from './SVG/PhoneIcon';
import { FacebookIcon } from './SVG/FacebookIcon';
import { InstIcon } from './SVG/InstIcon';
import { LinkedInIcon } from './SVG/LinkedInIcon';

import {
  _facebook,
  _instagram,
  _mail,
  _phone,
  _linkedin
} from '@/utils/constants';
import Link from 'next/link';
export const Socials = () => {
  const Links = [
    {
      href: 'mailto:' + _mail,
      src: <MailIcon width={20} height={20} color="white" />,
      alt: 'Mail'
    },
    {
      href: 'tel:' + _phone,
      src: <PhoneIcon width={20} height={20} color="white" />,
      alt: 'Phone'
    },
    {
      href: _facebook,
      src: <FacebookIcon width={20} height={20} color="white" />,
      alt: 'Facebook'
    },
    {
      href: _instagram,
      src: <InstIcon width={20} height={20} color="white" />,
      alt: 'Instagram'
    },
    {
      href: _linkedin,
      src: <LinkedInIcon width={20} height={20} color="white" />,
      alt: 'LinkedIn'
    }
  ];

  return Links.map((link, index) => (
    <Link
      key={index}
      href={link.href}
      className=" hover:scale-110"
      title={link.alt}
      target="_blank"
    >
      {link.src}
    </Link>
  ));
};
