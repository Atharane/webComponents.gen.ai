import { failsafeLLMResponse } from '@/utils/prompts';
import { useEffect, useState } from 'react';

const fallback =
  'The Super Sale is here! Get 40% off on all products. Use code SUPER40 at checkout.';

const PrimaryBanner = ({ prompt }: { prompt: string }) => {
  const [componentMetadata, setComponentMetadata] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setComponentMetadata('');
      const customPrompt = `Given the requirement for a website. Based on that creatively generate a 6-12 word of a tagline for the announcement banner, reply with just the tagline, nothing else.
        REQUIREMENTS :
        $$$
        ${prompt}
        $$$`;
      try {
        const response = await failsafeLLMResponse(customPrompt, Boolean);
        !response && setComponentMetadata(fallback);
        response && setComponentMetadata(response);
      } catch (error) {
        console.error('error:', error);
      }
    };

    fetchData();
  }, []);

  if (!componentMetadata) {
    return (
      <div role="status" className="animate-pulse">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
        <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-400 rounded mb-40">
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
          <div className="text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
            <p className="me-5 inline-block text-sm font-semibold text-white">
              Time to get going
            </p>
            <a
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Shop Now!
            </a>
          </div>

          <div className="flex items-center">
            <a
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm"
              href="#"
            >
              ✨
            </a>
            <span className="inline-block border-e border-white/[.3] w-px h-5 mx-2"></span>
            <a
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm"
              href="#"
            >
              {componentMetadata}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryBanner;
