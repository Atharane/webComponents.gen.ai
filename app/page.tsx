import GlobalNavbar from '@/components/global/navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-8 border">
      <GlobalNavbar />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-56 self-center">
        {/* text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-neutral-600 */}
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-800 bg-opacity-50">
          Build websites <span className="italic">supafast</span>
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-500 max-w-2xl text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>

      <div className="mt-8 gap-3 flex justify-center">
        <a
          className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-br from-slate-500 to-slate-800 hover:from-slate-600 hover:to-slate-800 text-white text-md font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
          href="/login"
        >
          Get Started
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
        </a>
      </div>
    </main>
  );
}
