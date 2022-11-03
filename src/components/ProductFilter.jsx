import { useRecoilState, useRecoilValue } from "recoil";
import {
  productListFilterState,
  productCategoriesState,
  productSorterState,
  productSorterTypeState,
  productListSorterState,
  productListSorterTypeState,
} from "../state/products.mjs";

export default function ProductFilter() {
  const categories = useRecoilValue(productCategoriesState);
  const sorters = useRecoilValue(productSorterState);
  const sorterTypes = useRecoilValue(productSorterTypeState);

  const [categoryFilter, setCategoryFilter] = useRecoilState(
    productListFilterState
  );
  const [productSorter, setProductSorter] = useRecoilState(
    productListSorterState
  );
  const [productSorterType, setProductSorterType] = useRecoilState(
    productListSorterTypeState
  );

  function updateFilter({ target: { value } }) {
    setCategoryFilter(value);
  }

  function updateSorter({ target: { value } }) {
    setProductSorter(value);
  }

  function updateSorterType({ target: { value } }) {
    setProductSorterType(value);
  }

  function normalizeCategoryName(category) {
    const splitCat = category.split("-");
    if (splitCat.length > 1) {
      return splitCat
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
  }

  return (
    <div className="w-full p-5 flex flex-row justify-center flex-nowrap bg-gray-300">
      <div className="mx-2">
        <label htmlFor="categorySelector">Category: </label>
        <select
          id="categorySelector"
          value={categoryFilter}
          onChange={updateFilter}
        >
          {categories.map((category, i) => {
            return (
              <option key={i} value={category}>
                {normalizeCategoryName(category)}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mx-2">
        <label htmlFor="sortBy">Sort by: </label>
        <select id="sortBy" value={productSorter} onChange={updateSorter}>
          {sorters.map((sorter, i) => {
            return (
              <option key={i} value={sorter}>
                {normalizeCategoryName(sorter)}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mx-2">
        <label htmlFor="orderBy">Order: </label>
        <select id="orderBy" value={productSorterType} onChange={updateSorterType}>
          {sorterTypes.map((sorterType, i) => {
            return (
              <option key={i} value={sorterType}>
                {normalizeCategoryName(sorterType)}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
