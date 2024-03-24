'use client';

import { useState } from 'react';

import PromptInput from '@/components/promptInput';
import HeroWishlist from '@/components/hero/wishlist';
import PrimaryStatsCard from '@/components/stats/primary';
import PrimaryBanner from '@/components/banner/primary';

import Primary from '../../components/footers/primary';
import PrimaryFAQ from '@/components/faq/primary';
import PrimaryBlogpost from '@/components/blogposts/primary';
import BreadCrumbs from '@/components/breadcrumbs';
import {
  copyGeneratedSiteCode,
  openInCodeSandbox
} from '@/components/previewHeader';

type components =
  | 'STATS_CARD'
  | 'ANNOUNCEMENT_BANNER'
  | 'FAQ_SECTION'
  | 'IMAGE_OVERLAY_CARD'
  | 'BLOG_SECTION';

export default function DashboardClient({ email }: { email?: string }) {
  const [prompt, setPrompt] = useState('');
  const [componentsArray, setComponentsArray] = useState<string[]>([]);
  console.log('🚀 ~ DashboardClient ~ componentsArray:', componentsArray);

  // useEffect(() => {
  //   const element = document.getElementById("site-preview")
  //   element?.scrollIntoView({ behavior: "smooth" })
  // }, [siteMetadata?.Heading])

  return (
    <main className="min-h-screen p-24 pt-16">
      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        componentArray={componentsArray}
        setComponentArray={setComponentsArray}
      />

      <BreadCrumbs component={componentsArray} />

      {Boolean(componentsArray?.length) && (
        <div className="w-full border p-4 bg-white/10 rounded-lg space-y-4">
          <div className="space-y-4" id="site-preview">
            <PrimaryBanner prompt={prompt} />
            <HeroWishlist prompt={prompt} />
            <PrimaryStatsCard prompt={prompt} />
            <PrimaryFAQ prompt={prompt} />
            <PrimaryBlogpost prompt={prompt} />

            {/* {componentsArray.map((component) => {
              switch (component) {
                case 'STATS_CARD':
                  return <HeroOne key={component} />;
                case 'ANNOUNCEMENT_BANNER':
                  return <HeroWishlist key={component} />;
                case 'FAQ_SECTION':
                  return <ServiceSection key={component} />;
                case 'IMAGE_OVERLAY_CARD':
                  return <NavbarTwo key={component} />;
                case 'BLOG_SECTION':
                  return <FooterOne key={component} />;
                default:
                  return null;
              } */}

            {/* senter horizontally */}
            <footer className="p-2 w-fit bg-slate-300/60 rounded-md sticky bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="inline-flex rounded-lg shadow-sm">
                <button
                  onClick={copyGeneratedSiteCode}
                  type="button"
                  className="bg-white/80 py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    data-testid="geist-icon"
                    height="16"
                    stroke-linejoin="round"
                    viewBox="0 0 16 16"
                    width="16"
                    style={{ color: 'currentcolor' }}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={openInCodeSandbox}
                  type="button"
                  className="bg-white/80  py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    data-testid="geist-icon"
                    height="16"
                    stroke-linejoin="round"
                    viewBox="0 0 16 16"
                    width="16"
                    style={{ color: 'currentcolor' }}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 0.0994263L8.40611 0.360987L15.6561 5.03048L16 5.25197V5.66102V10.3305V10.7396L15.6561 10.961L8.40611 15.6305L8 15.8921L7.59389 15.6305L0.343892 10.961L0 10.7396V10.3305V5.66102V5.25197L0.343892 5.03048L7.59389 0.360987L8 0.0994263ZM1.5 9.16029L3.24781 7.99577L1.5 6.83124V9.16029ZM2.0654 5.70591L4.375 7.24474L7.375 5.24591L7.375 2.28616L2.0654 5.70591ZM11.625 7.24474L8.625 5.24591V2.28616L13.9346 5.70591L11.625 7.24474ZM14.5 6.83124L12.7522 7.99577L14.5 9.16029V6.83124ZM10.4978 7.99577L8 6.33153L5.50219 7.99577L8 9.66L10.4978 7.99577ZM7.375 10.7456L4.375 8.74679L2.0654 10.2856L7.375 13.7054V10.7456ZM8.625 13.7054L13.9346 10.2856L11.625 8.74679L8.625 10.7456V13.7054Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </footer>
          </div>
          <Primary prompt={prompt} />
        </div>
      )}
    </main>
  );
}
