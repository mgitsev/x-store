import CategoryFilter from "./CategoryFilter";
import Orderer from "./Orderer";
import Sorter from "./Sorter";

export default function ProductFilter() {
  return (
    <div className="w-full p-5 flex flex-row justify-center flex-nowrap bg-gray-300">
      <CategoryFilter />
      <Sorter />
      <Orderer />
    </div>
  );
}
