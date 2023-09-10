import Link from 'next/link';
import { categories } from '~/constants';

import CategoriesDropDown from './CategoriesDropDown';

export default function Categories() {
  return (
    <section className="mt-6 hidden w-full space-x-2 px-2 md:flex">
      <CategoriesDropDown />

      {categories.length > 0 &&
        categories.map((category) => {
          return (
            <button
              key={String(Math.random())}
              className="smooth-effect rounded-full px-3 py-2 hover:overflow-clip hover:bg-purple-600 hover:px-4 hover:font-semibold hover:text-white "
            >
              <Link href={category.url}>{category.title}</Link>
            </button>
          );
        })}
    </section>
  );
}
