export default function SearchBar() {
    return (
      <div className="flex justify-end">
        <div className="max-sm:hidden block  w-full md:w-96 border border-gray-600 rounded-3xl p-2 pl-4 text-sm">
          <input
            id="default-search"
            className="w-full bg-slate-950 rounded-2xl border-none outline-none"
            placeholder="Search..."
          />
          <button className="bg-slate-950 text-gray-480 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
        <div className="sm:hidden">
          <button className="bg-slate-950 text-gray-480 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  