import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentProduct } from "../state/products.mjs";

export default function Product() {
  const { id } = useParams();
  const prod = useRecoilValue(currentProduct(id));
  console.log(prod);
  return <h1>{prod.title}</h1>;
}
