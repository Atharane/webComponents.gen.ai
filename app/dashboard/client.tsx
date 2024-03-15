'use client';

import { useEffect, useState } from 'react';

import FooterOne from '@/components/footers/one';
import HeroOne from '@/components/hero/one';
import PreviewHeader from '@/components/previewHeader';
import PromptInput from '@/components/promptInput';
import NavbarTwo from '@/components/navbar/two';
import ServiceSection from '@/components/services/one';
import HeroWishlist from '@/components/hero/wishlist';
import PrimaryStatsCard from '@/components/stats/primary';
import PrimaryBanner from '@/components/banner/primary';
<<<<<<< HEAD
import Primary from '../../components/footers/primary';
=======
import PrimaryFAQ from '@/components/faq/primary';
import PrimaryBlogpost from '@/components/blogposts/primary';
>>>>>>> 9cdc4c106ee6df20e4ac5b4c2d54391c1feff8bf

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



      {Boolean(componentsArray?.length) && (
        <div className="w-full border p-4 bg-white/10 rounded-lg space-y-4">
          <PreviewHeader />
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
          </div>
          <Primary prompt={prompt}/>
        </div>
      )}
      
    </main>
  );
}
