import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Fibr Dashboard
            </span>
          </a>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/create"
                  class="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-600"
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
