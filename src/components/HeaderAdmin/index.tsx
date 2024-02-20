import Link from 'next/link';

import Options from './Options';
import Image from 'next/image';

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between py-5 items-center">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={150}
              height={77}
              priority
              quality={100}
            />
          </Link>

          {/* Button to toggle dropdown */}
          <Options />
        </div>
      </div>
    </header>
  );
}
