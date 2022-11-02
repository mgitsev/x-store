import ProductCard from "../components/ProductCard.jsx";

export default function Products({ products }) {
  return (
    <div className="flex flex-row flex-wrap w-full justify-around">
      {products.map((product) => {
        return <ProductCard {...product} key={product.id} />;
      })}
    </div>
  );
}
