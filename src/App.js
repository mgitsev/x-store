import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { useEffect, useState } from "react";
import { getCategories, getProducts } from "./apis/products.mjs";

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts().then(({ products }) => setProducts(products));
    getCategories().then((categories) => setCategories(categories));
  }, []);
  return (
    <>
      <Navigation />
      <main className="px-10 py-5">
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
          <Route path="/products" element={<Products products={products} />} />
        </Routes>
      </main>
    </>
  );
}
