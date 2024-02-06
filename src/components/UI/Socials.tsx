import React from 'react';

import { MailIcon } from './SVG/MailIcon';
import { PhoneIcon } from './SVG/PhoneIcon';
import { FacebookIcon } from './SVG/FacebookIcon';
import { InstIcon } from './SVG/InstIcon';
import { TwitterIcon } from './SVG/TwitterIcon';

import {
  _facebook,
  _instagram,
  _mail,
  _phone,
  _twitter
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
      href: _twitter,
      src: <TwitterIcon width={20} height={20} color="white" />,
      alt: 'Twitter'
    }
  ];

  return Links.map((link, index) => (
    <Link
      key={index}
      href={link.href}
      className=" hover:scale-105"
      title={link.alt}
      target="_blank"
    >
      {link.src}
    </Link>
  ));
};
