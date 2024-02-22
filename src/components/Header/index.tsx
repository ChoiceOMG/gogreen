import Link from 'next/link';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

import Image from 'next/image';

import { Button } from '../UI/button';
import { Socials } from '../UI/Socials';

const Header = () => {
  return (
    <header>
      {/* SubHeader */}
      <div className=" bg-goGreen-black py-[14px]">
        <div className="container">
          <div className="flex gap-4 items-center justify-around sm:justify-end">
            <Socials />
          </div>
        </div>
      </div>
      <div className=" bg-goGreen-mint py-[15px]">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/" title="Go to Home">
              <Image
                src="/images/logo.svg"
                width={210}
                height={30}
                quality={100}
                priority
                alt="GoGreen"
              />
            </Link>
            <nav className="flex gap-4 ml-auto max-lg:hidden justify-between mr-4 xl:mr-7">
              <Menu />
            </nav>

            <Button
              link="/contact"
              linkProps={{ title: 'Contact Page' }}
              className="max-lg:hidden"
            >
              Contact Us
            </Button>

            <div className="lg:hidden block">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
