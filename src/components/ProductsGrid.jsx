import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }) {
  return (
    <div className="flex flex-row flex-wrap w-full gap-4 justify-evenly mx-auto">
      {products.map((product) => {
        return <ProductCard {...product} key={product.id} />;
      })}
    </div>
  );
}
