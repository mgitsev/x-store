import { useRecoilState } from "recoil";
import { sorterTypeState } from "../../state/products.mjs";
import { normalizeName } from "./helpers.mjs";

export default function Orderer() {
  const [productSorterType, setProductSorterType] =
    useRecoilState(sorterTypeState);
  const orderChoices = ["ascending", "descending"];

  function updateSorterType({ target: { value } }) {
    setProductSorterType(value);
  }
  return (
    <div className="mx-2 text-center">
      <label
        for="categories"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Sort by
      </label>
      <select
        id="categories"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={productSorterType}
        onChange={updateSorterType}
      >
        {orderChoices.map((choice, i) => {
          return (
            <option value={choice} key={i}>
              {normalizeName(choice)}
            </option>
          );
        })}
      </select>
    </div>
  );
}
