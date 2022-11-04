import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentProduct } from "../state/products.mjs";

export default function Product() {
  const { id } = useParams();
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = useRecoilValue(currentProduct(id));

  return (
    <>
      <header className="text-5xl">{title}</header>
      <div className="flex flex-row flex-nowrap content-evenly items-center">
        <div className="max-w-xs min-w-[20rem] h-80 mx-5">
          {images.map((image, i) => (
            <img src={image} key={i} alt="" className="object-cover" />
          ))}
        </div>
        <div>
          <p>{description}</p>
          <h2>{price}</h2>
          <h2>{stock > 0 ? "In Stock" : "Out of Stock"}</h2>
        </div>
      </div>
    </>
  );
}
