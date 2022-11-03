import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }) {
  return (
    <div className="flex flex-row flex-wrap w-full justify-evenly">
      {products.map((product) => {
        return <ProductCard {...product} key={product.id} />;
      })}
    </div>
  );
}
