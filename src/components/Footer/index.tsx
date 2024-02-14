import { MenuFooter } from '@/utils/URL';
import Link from 'next/link';
import React from 'react';
import { MenuItem } from '@/types/types';
import Image from 'next/image';
import { Socials } from '../UI/Socials';
import { MailIcon } from '../UI/SVG/MailIcon';
import { _address, _addressLink, _mail, _phone } from '@/utils/constants';
import { PhoneIcon } from '../UI/SVG/PhoneIcon';
import { LocateIcon } from '../UI/SVG/LocateIcon';
const Footer = () => {
  const menuColumns = MenuFooter.reduce<MenuItem[][]>(
    (acc, menuItem, index) => {
      const columnIndex = Math.floor(index / 4);
      if (!acc[columnIndex]) {
        acc[columnIndex] = [];
      }
      acc[columnIndex].push(menuItem);
      return acc;
    },
    []
  );

  return (
    <footer>
      <div className=" bg-goGreen-mint py-[80px]">
        {' '}
        <div className="container">
          <Link href="/" title="Go to Home">
            <Image
              src="/images/logo.svg"
              width={210}
              height={30}
              alt="GoGreen"
            />
          </Link>
          <div className="flex justify-between flex-wrap gap-11 md:gap-4 mt-9">
            <div className="grid sm:grid-cols-2 gap-7">
              {menuColumns.map((column, index) => (
                <nav key={index} className=" space-y-6 flex flex-col">
                  {column.map((menuItem, itemIndex) => (
                    <Link
                      key={itemIndex}
                      className={` whitespace-nowrap font-Avenir font-black uppercase transition-colors duration-300 ease-in-out hover:text-goGreen-green `}
                      href={menuItem.link || '#'}
                    >
                      {menuItem.name}
                    </Link>
                  ))}
                  {index === menuColumns.length - 1 && (
                    <div className=" text-goGreen-green">
                      <p className=" font-black mb-5 font-Avenir uppercase">
                        Business Hours:
                      </p>
                      <p>
                        8:00 AM – 6:00 PM <br /> 7 Days a Week
                      </p>
                    </div>
                  )}
                </nav>
              ))}
            </div>
            <nav className=" space-y-9 flex flex-col">
              <li className="flex items-center gap-[30px]">
                <MailIcon width={28} height={20} />

                <Link
                  href={`mailto:${_mail}`}
                  className=" whitespace-nowrap font-Avenir font-black uppercase transition-colors duration-300 ease-in-out hover:text-goGreen-green "
                >{`${_mail}`}</Link>
              </li>
              <li className="flex items-center gap-[30px]">
                <PhoneIcon width={28} height={28} />

                <Link
                  href={`tel:${_phone}`}
                  className=" whitespace-nowrap font-Avenir font-black uppercase transition-colors duration-300 ease-in-out hover:text-goGreen-green "
                >{`${_phone}`}</Link>
              </li>
              <li className="flex items-center gap-[30px]">
                <LocateIcon width={28} height={37} />

                <Link
                  href={_addressLink}
                  target="_blank"
                  className=" whitespace-nowrap font-Avenir font-black uppercase transition-colors duration-300 ease-in-out hover:text-goGreen-green "
                >{`${_address}`}</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className=" bg-goGreen-black py-[14px]" id="footer_bottom">
        <div className="container">
          <div className="flex justify-between items-center max-md:flex-col gap-4">
            {' '}
            <p className="text-white text-center ">
              Copyright 2024 © GoGreen. Canadian Web Design by{' '}
              <Link
                href="https://www.choice.marketing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Choice OMG full stack development
              </Link>
            </p>
            <div className="flex gap-4 items-center justify-around sm:justify-end">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
