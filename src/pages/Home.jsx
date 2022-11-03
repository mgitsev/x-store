import { useRecoilValue } from "recoil";
import { productCategoriesState } from "../state/products.mjs";

export default function Home() {
  const categories = useRecoilValue(productCategoriesState);
  return (
    <div className="flex flex-col items-center">
      {categories.map((cat, i) => {
        return <div key={i}>{cat}</div>;
      })}
    </div>
  );
}
