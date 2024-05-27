import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/UI/button';

export default function NotFound() {
  return (
    <section className=" relative pt-32 pb-14 md:pb-7 lg:pb-40 lg:-mb-24 ">
      <div className="container flex h-[calc(100vh_-_400px)] sm:h-screen  flex-col pt-20">
        <Link href="/" title="Go back to Home">
          <Image
            src="/images/logo.svg"
            width={188}
            height={85}
            alt="404"
            className=" mb-16"
          />
        </Link>
        <div className="AccentText mb-7">
          Opps! We couldn’t find that page...
        </div>
        <h1 className="h1 mb-14">404</h1>

        <Button className="w-[200px]">
          <Link href="/" title="Go back to Home">
            Home Page
          </Link>
        </Button>
      </div>
    </section>
  );
}
