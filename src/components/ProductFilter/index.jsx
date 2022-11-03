import CategoryFilter from "./CategoryFilter";
import Orderer from "./Orderer";
import Sorter from "./Sorter";

export default function ProductFilter() {
  return (
    <div className="xsm:w-7/8 md:w-1/2 xsm:p-2 p-5 flex xsm:flex-col flex-row justify-center flex-nowrap bg-gray-300 rounded-lg">
      <CategoryFilter />
      <Sorter />
      <Orderer />
    </div>
  );
}
