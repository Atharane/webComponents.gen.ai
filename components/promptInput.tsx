'use client';

import { useState } from 'react';
import fallbackData from '../models/fallback.json';
import { failsafeLLMResponse } from '@/utils/prompts';
import { jsonValidator } from '@/utils/generics';

const PromptInput = ({
  prompt,
  componentArray,
  setPrompt,
  setComponentArray
}: {
  prompt: string;
  componentArray: string[];
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  setComponentArray: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const handleSubmit = async () => {
    setComponentArray([]);
    const prompto = `A user is planning to launch a new website for their business. Based on the user's specifications: ${prompt}, identify the essential components that the website should include from the following options: "STATS_CARD", "ANNOUNCEMENT_BANNER", "FAQ_SECTION", "IMAGE_OVERLAY_CARD", "BLOG_SECTION". The list should be presented in the order those components should appear on the website, and only the chosen components should be mentioned. Provide the components names in all caps and separated by a space, with no additional text or formatting. For example, if the needed components are stats card and blog section, you would respond with 'STATS_CARD BLOG_SECTION.`;

    const response = await failsafeLLMResponse(prompto, Boolean);
    const components = response?.trim()?.split(' ');
    setComponentArray(components || []);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="h-full flex flex-col justify-center">
        <div className="-mt-20 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            what should we build today?
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Your AI-powered copilot for the web
          </p>
        </div>

        <div className="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <textarea
              rows={12}
              className="p-4 pr-32 block w-full border rounded-sm border-gray-700 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 font-mono"
              placeholder="ask me anything..."
              value={prompt}
              onKeyDown={(e) => {
                e.key === 'Enter' && handleSubmit();
              }}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="absolute top-1/2 end-2 -translate-y-1/2">
              <button
                type="button"
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mr-2"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
              </button>

              <button
                onClick={handleSubmit}
                type="button"
                className="bg-slate-900  size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-100 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                    d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptInput;
