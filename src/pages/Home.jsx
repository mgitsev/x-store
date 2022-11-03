import { useRecoilValue } from "recoil";
import { productCategories } from "../state/categories.mjs";

export default function Home() {
  const categories = useRecoilValue(productCategories);
  return (
    <div className="flex flex-col items-center">
      {categories.map((cat, i) => {
        return <div key={i}>{cat}</div>;
      })}
    </div>
  );
}
