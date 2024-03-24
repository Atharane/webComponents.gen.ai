const BreadCrumbs = ({ component }: { component: string[] }) => {
  return (
    <ol className="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
      {
        component.map((component, index) => (
          <li key={index} className="inline-flex items-center p-2 bg-slate-200/40 m-2 rounded text-black font-mono">
            <a
              className="flex items-center text-sm hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
              href="#"
            >
              {component}
            </a>
            <svg
              className="flex-shrink-0 mx-2 overflow-visible size-4 "
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
          </li>
        ))
      }

    </ol>
  );
};

export default BreadCrumbs;
