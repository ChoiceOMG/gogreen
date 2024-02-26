import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';
import { TextBlock } from '@/components/UI/TextBlock';
import Link from 'next/link';
import { _mail } from '@/utils/constants';

export const metadata: Metadata = getPageMeta('/');

export default async function Page() {
  return (
    <>
      <section className="py-28">
        <div className="container">
          <TextBlock
            title="Welcome to ggfservices.com!"
            subtitle=""
            paragraph={
              <>
                <p>
                  These terms and conditions outline the rules and regulations
                  for the use of GoGreen Facilities Management Edmonton&lsquo;s
                  Website, located at https://ggfservices.com/.
                </p>
                <p>
                  By accessing this website we assume you accept these terms and
                  conditions. Do not continue to use ggfservices.com if you do
                  not agree to take all of the terms and conditions stated on
                  this page.
                </p>
                <p>
                  The following terminology applies to these Terms and
                  Conditions, Privacy Statement and Disclaimer Notice and all
                  Agreements: &ldquo;Client&rdquo;, &ldquo;You&rdquo; and
                  &ldquo;You&rsquo;re&rdquo; refer to you, the person logged on
                  to this website and compliant with the Company&apos;s terms
                  and conditions. &ldquo;The Company&rdquo;,
                  &ldquo;Ourselves&rdquo;, &ldquo;We&rdquo;, &ldquo;Our&rdquo;
                  and &ldquo;Us&rdquo;, refers to our Company.
                  &ldquo;Party&rdquo;, &ldquo;Parties&rdquo;, or
                  &ldquo;Us&rdquo;, refers to both the Client and ourselves. All
                  terms refer to the offer, acceptance and consideration of
                  payment necessary to undertake the process of our assistance
                  to the Client in the most appropriate manner for the express
                  purpose of meeting the Client&apos;s needs in respect of the
                  provision of the Company&apos;s stated services, in accordance
                  with and subject to, prevailing law of Canada. Any use of the
                  above terminology or other words in the singular, plural,
                  capitalization and/or he/she or they, are taken as
                  interchangeable and therefore as referring to the same.
                </p>
              </>
            }
          />
          <TextBlock
            title="Cookies"
            subtitle=""
            paragraph={
              <>
                <p>
                  We employ the use of cookies. By accessing ggfservices.com,
                  you agree to the use of cookies in agreement with the GoGreen
                  Facilities Management Edmonton&lsquo;s Privacy Policy.
                </p>
                <p>
                  Most interactive websites use cookies to retrieve user details
                  for each visit. Cookies are used by our website to enable the
                  functionality of certain areas to make it easier for people
                  visiting our website. Some of our affiliate/advertising
                  partners may also use cookies.
                </p>
              </>
            }
          />
          <TextBlock
            title="License"
            subtitle=""
            paragraph={
              <>
                <p>
                  Unless otherwise stated, GoGreen Facilities Management
                  Edmonton and/or its licensors own the intellectual property
                  rights for all material on ggfservices.com. All intellectual
                  property rights are reserved. You may access this from
                  ggfservices.com for your own personal use subject to
                  restrictions set in these terms and conditions.
                </p>
                <p>
                  You must not:
                  <li className=" list-outside list-disc pl-5 ml-5">
                    Republish material from ggfservices.com
                  </li>
                  <li className=" list-outside list-disc pl-5 ml-5">
                    Sell, rent or sub-license material from ggfservices.com
                  </li>
                  <li className=" list-outside list-disc pl-5 ml-5">
                    Reproduce, duplicate or copy material from ggfservices.com
                  </li>
                  <li className=" list-outside list-disc pl-5 ml-5">
                    Redistribute content from ggfservices.com
                  </li>
                </p>
              </>
            }
          />
          <TextBlock
            title="Disclaimer"
            subtitle=""
            paragraph={
              <>
                <p>
                  To the maximum extent permitted by applicable law, we exclude
                  all representations, warranties and conditions relating to our
                  website and the use of this website. Nothing in this
                  disclaimer will:
                </p>
                <p>
                  <li className=" list-outside list-disc pl-5 ml-5">
                    limit or exclude our or your liability for death or personal
                    injury;
                  </li>
                  <li className=" list-outside list-disc pl-5 ml-5">
                    limit or exclude our or your liability for fraud or
                    fraudulent misrepresentation;
                  </li>
                  <li className=" list-outside list-disc pl-5 ml-5">
                    limit any of our or your liabilities in any way that is not
                    permitted under applicable law; or
                  </li>
                  <li className=" list-outside list-disc pl-5 ml-5">
                    exclude any of our or your liabilities that may not be
                    excluded under applicable law.
                  </li>
                </p>
                <p>
                  The limitations and prohibitions of liability set in this
                  Section and elsewhere in this disclaimer: (a) are subject to
                  the preceding paragraph; and (b) govern all liabilities
                  arising under the disclaimer, including liabilities arising in
                  contract, in tort and for breach of statutory duty.
                </p>
                <p>
                  As long as the website and the information and services on the
                  website are provided free of charge, we will not be liable for
                  any loss or damage of any nature.
                </p>
              </>
            }
          />
        </div>
      </section>
      <ContactUsSection />
    </>
  );
}
