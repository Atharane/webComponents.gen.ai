import { jsonValidator } from '@/utils/generics';
import { failsafeLLMResponse } from '@/utils/prompts';
import { useEffect, useState } from 'react';

const fallback = {
  stat1: { statName: 'Products Sold', statValue: '72,540' },
  stat2: { statName: 'Active Users', statValue: '1,200' },
  stat3: { statName: 'Revenue', statValue: '$1,200,000' },
  stat4: { statName: 'Refunds', statValue: '0' }
};

const PrimaryStatsCard = ({ prompt }: { prompt: string }) => {
  const [componentMetadata, setComponentMetadata] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setComponentMetadata(null);
      const customPrompt = `Given the requirement for a website. Based on that creatively generate a four stats to show on the product website. Add the generated content to the following JSON as values to the corresponding keys.

        something like this:

        {
            stat1: {statName: "Products Sold", statValue: "72,540"},
            ...
        }
      
        Format:
        {
            "stat1": {"statName": "", "statValue": ""},
            "stat2": {"statName": "", "statValue": ""},
            "stat3": {"statName": "", "statValue": ""},
            "stat4": {"statName": "", "statValue": ""},
        }
        
        REQUIREMENTS : 
        $$$
        ${prompt}
        $$$`;
      try {
        const response = await failsafeLLMResponse(customPrompt, jsonValidator);
        console.log('🚀 ~ fetchData ~ response:', response);
        !response && setComponentMetadata(fallback);
        response && setComponentMetadata(JSON.parse(response));
      } catch (error) {
        console.error('error:', error);
      }
    };

    fetchData();
  }, []);

  if (componentMetadata) {
    return (
      <div className="flex justify-around mt-20">
        <div
          role="status"
          className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
          <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="flex items-baseline mt-4 ">
            <div className="w-full bg-gray-200 rounded-t-lg h-28 dark:bg-gray-700"></div>
            <div className="w-full h-32 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-12 ms-6 dark:bg-gray-700"></div>
            <div className="w-full h-24 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-40 ms-6 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-24 ms-6 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-40 ms-6 dark:bg-gray-700"></div>
          </div>
          <span className="sr-only">loading...</span>
        </div>
        <div
          role="status"
          className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
          <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="flex items-baseline mt-4 ">
            <div className="w-full bg-gray-200 rounded-t-lg h-28 dark:bg-gray-700"></div>
            <div className="w-full h-32 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-12 ms-6 dark:bg-gray-700"></div>
            <div className="w-full h-24 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-40 ms-6 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-24 ms-6 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-40 ms-6 dark:bg-gray-700"></div>
          </div>
          <span className="sr-only">loading...</span>
        </div>

        <div
          role="status"
          className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
          <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="flex items-baseline mt-4">
            <div className="w-full bg-gray-200 rounded-t-lg h-28 dark:bg-gray-700"></div>
            <div className="w-full h-32 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-12 ms-6 dark:bg-gray-700"></div>
            <div className="w-full h-24 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-40 ms-6 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-24 ms-6 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-40 ms-6 dark:bg-gray-700"></div>
          </div>
          <span className="sr-only">loading...</span>
        </div>

        <div
          role="status"
          className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
          <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="flex items-baseline mt-4">
            <div className="w-full bg-gray-200 rounded-t-lg h-28 dark:bg-gray-700"></div>
            <div className="w-full h-32 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-12 ms-6 dark:bg-gray-700"></div>
            <div className="w-full h-24 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-40 ms-6 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-24 ms-6 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-40 ms-6 dark:bg-gray-700"></div>
          </div>
          <span className="sr-only">loading...</span>
        </div>

        <div
          role="status"
          className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
          <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="flex items-baseline mt-4">
            <div className="w-full bg-gray-200 rounded-t-lg h-28 dark:bg-gray-700"></div>
            <div className="w-full h-32 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-12 ms-6 dark:bg-gray-700"></div>
            <div className="w-full h-24 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-40 ms-6 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-24 ms-6 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-40 ms-6 dark:bg-gray-700"></div>
          </div>
          <span className="sr-only">loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                {componentMetadata?.stat1?.statName}
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg
                    className="flex-shrink-0 size-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
                    role="tooltip"
                  >
                    The number of daily users
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {componentMetadata?.stat1?.statValue}
              </h3>
              <span className="flex items-center gap-x-1 text-green-600">
                <svg
                  className="inline-block size-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-sm">1.7%</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                {componentMetadata?.stat2?.statName}
              </p>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {componentMetadata?.stat2?.statValue}
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                {componentMetadata?.stat3?.statName}
              </p>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {componentMetadata?.stat3?.statValue}
              </h3>
              <span className="flex items-center gap-x-1 text-green-600">
                <svg
                  className="inline-block size-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                  <polyline points="16 17 22 17 22 11" />
                </svg>
                <span className="inline-block text-sm">4.7%</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                {componentMetadata?.stat4?.statName}
              </p>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {componentMetadata?.stat4?.statValue}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryStatsCard;
