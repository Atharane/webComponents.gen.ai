import { jsonValidator } from '@/utils/generics';
import { failsafeLLMResponse } from '@/utils/prompts';
import { useEffect, useState } from 'react';

const fallback = {
  faq1: {
    question: 'Can I refund at anytime?',
    answer:
      'Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.'
  },
  faq2: {
    question: 'Do you offer discounts?',
    answer:
      "We've built in discounts at each tier for teams. The time has come to bring those ideas and plans to life."
  },
  faq3: {
    question: 'What is your refund policy?',
    answer:
      'We offer refunds. We aim high at being focused on building relationships with our clients and community.'
  },
  faq4: {
    question: 'Do you guys offer gift cards?',
    answer:
      'Yes, we do offer gift cards. Please contact us for more details. We will be happy to help you.'
  }
};

const PrimaryFAQ = ({ prompt }: { prompt: string }) => {
  const [componentMetadata, setComponentMetadata] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setComponentMetadata(null);
      const customPrompt = `Given the requirement for a website. Based on that creatively generate a four frequently asked questions to show on the product website. Add the generated content to the following JSON as values to the corresponding keys.

        something like this:

        {
            faq1: {question: "Are we homemade?", answer: "Yes, we are. We are a team of highly skilled professionals who are dedicated to their work."},
            ...
        }

        Format:
        {
            "faq1": {"question": "", "answer": ""},
            "faq2": {"question": "", "answer": ""},
            "faq3": {"question": "", "answer": ""},
            "faq4": {"question": "", "answer": ""},
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

  if (!componentMetadata) {
    return (
      <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
        <div className="flex items-center w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full max-w-[480px]">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full max-w-[400px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full max-w-[480px]">
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full max-w-[440px]">
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        </div>
        <div className="flex items-center w-full max-w-[360px]">
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {componentMetadata?.faq1?.question}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {componentMetadata?.faq1?.answer}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {componentMetadata?.faq2?.question}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {componentMetadata?.faq2?.answer}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {componentMetadata?.faq3?.question}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {componentMetadata?.faq3?.answer}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {componentMetadata?.faq4?.question}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {componentMetadata?.faq4?.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryFAQ;
