import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';
import { TextBlock } from '@/components/UI/TextBlock';
import Link from 'next/link';
import { _mail } from '@/utils/constants';

import { headers } from 'next/headers';
const headersList = headers();

export const metadata: Metadata = getPageMeta(
  headersList.get('next-url') || '/'
);

export default async function Page() {
  return (
    <>
      <section className="py-28">
        <div className="container">
          <TextBlock
            title=""
            subtitle=""
            paragraph={
              <>
                <p>
                  We collect website analytics and traffic data to understand
                  how visitors are using the site and to help us understand how
                  to make the site better for you. We use Google Analytics which
                  shares the information with Google (who already knows
                  everything) and we share the information with our marketing
                  agency to help determine the effectiveness of our online
                  marketing campaigns. No other company will use your
                  information and we will not share it outside of our immediate
                  business.
                </p>

                <p>What We Collect:</p>
                <p>
                  We count contact form submissions and track whether you came
                  from paid advertising or organically through a web search.
                </p>
                <p>
                  If you provide us with personal details in these contact
                  forms, that data is sent by email and is not stored in
                  analytics.
                </p>
                <p>
                  As you browse our site, our web server logs each request and
                  stores your IP. This is not used in the Analytics reports and
                  is only used to help protect our web servers from hacking or
                  malicious users (and from time to time to help us troubleshoot
                  site errors).
                </p>
                <p>
                  If you do not want to be tracked at all, there is an option in
                  most modern browsers that enables a “Do Not Track” feature.
                  This will prevent us from collecting almost all information
                  about your visit. If you would like to prevent us from
                  recording your IP address, you are free to use a VPN service.
                </p>

                <p>
                  Contact us if you have any questions about your privacy at:
                </p>
                <Link
                  href={`mailto:${_mail}`}
                  className="text-goGreen-500 uppercase"
                >
                  {_mail}
                </Link>
              </>
            }
          />
        </div>
      </section>
      <ContactUsSection />
    </>
  );
}
