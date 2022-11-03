import { useRecoilValue } from "recoil";
import ProductFilter from "../components/ProductFilter.jsx";
import ProductsGrid from "../components/ProductsGrid.jsx";
import { filteredProductList } from "../state/products.mjs";

export default function Products() {
  const products = useRecoilValue(filteredProductList);
  return (
    <>
      <ProductFilter />
      <ProductsGrid products={products} />
    </>
  );
}
