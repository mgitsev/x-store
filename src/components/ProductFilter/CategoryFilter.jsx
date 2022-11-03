import { useRecoilState, useRecoilValue } from "recoil";
import { productCategories } from "../../state/categories.mjs";
import { categoryFilterState } from "../../state/products.mjs";
import { normalizeName } from "./helpers.mjs";
export default function CategoryFilter() {
  const categories = useRecoilValue(productCategories);
  const [categoryFilter, setCategoryFilter] =
    useRecoilState(categoryFilterState);

  function updateFilter({ target: { value } }) {
    setCategoryFilter(value);
  }
  return (
    <div className="mx-2 text-center">
      <label
        htmlFor="categories"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Category
      </label>
      <select
        id="categories"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={categoryFilter}
        onChange={updateFilter}
      >
        {categories.map((category, i) => {
          return (
            <option value={category} key={i}>
              {normalizeName(category)}
            </option>
          );
        })}
      </select>
    </div>
  );
}
