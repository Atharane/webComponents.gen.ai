import { jsonValidator } from '@/utils/generics';
import { failsafeLLMResponse } from '@/utils/prompts';
import { useEffect, useState } from 'react';

const fallback = {
  blog1: {
    title: 'Better is when everything works together',
    shortDescription:
      'The best way to get started is to quit talking and begin doing. We are what we repeatedly do. Excellence, then, is not an act, but a habit.'
  },
  blog2: {
    title: 'What CFR really is about',
    shortDescription:
      'The best way to get started is to quit talking and begin doing. We are what we repeatedly do. Excellence, then, is not an act, but a habit.'
  },
  blog3: {
    title: 'Should Product Owners think like entrepreneurs?',
    shortDescription:
      'The best way to get started is to quit talking and begin doing. We are what we repeatedly do. Excellence, then, is not an act, but a habit.'
  },
  blog4: {
    title: 'Announcing Front Strategies: Ready-to-use rules',
    shortDescription:
      'The best way to get started is to quit talking and begin doing. We are what we repeatedly do. Excellence, then, is not an act, but a habit.'
  }
};

const PrimaryBlogpost = ({ prompt }: { prompt: string }) => {
  const [componentMetadata, setComponentMetadata] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setComponentMetadata(null);
      const customPrompt = `Given the requirement for a website. Based on that creatively generate a four blogposts cards to show on the product website. Add the generated content to the following JSON as values to the corresponding keys.

        something like this:

        {
            blog1: {title: "We love what we do", shortDescription: "The best way to get started is to quit talking and begin doing. We are what we repeatedly do. Excellence, then, is not an act, but a habit."},
            ...
        }

        Format:
        {
            blog1: {title: "" , shortDescription: ""},
            blog2: {title: "" , shortDescription: ""},
            blog3: {title: "" , shortDescription: ""},
            blog4: {title: "" , shortDescription: ""},
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

  if (!componentMetadata) return <h1>loading....</h1>;
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Read our latest news
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Read from our latest blogs to know our{' '}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
        <a
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
              {componentMetadata?.blog1?.title}
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
              {componentMetadata?.blog1?.shortDescription}
            </h3>
          </div>
        </a>

        <a
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80"
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
              {componentMetadata?.blog2?.title}
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
              {componentMetadata?.blog2?.shortDescription}
            </h3>
          </div>
        </a>

        <a
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
              {componentMetadata?.blog3?.title}
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
              {componentMetadata?.blog3?.shortDescription}
            </h3>
          </div>
        </a>

        <a
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt="Image Description"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
              {componentMetadata?.blog4?.title}
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
              {componentMetadata?.blog4?.shortDescription}
            </h3>
          </div>
        </a>
      </div>

      <div className="text-center">
        <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p className="text-gray-600 dark:text-gray-400">
              Want to read more?
            </p>
            <a
              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="../docs/index.html"
            >
              Subsribe to our newsletter...
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryBlogpost;
