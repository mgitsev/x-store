import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { useEffect } from "react";
import { getProducts } from "./apis/products.mjs";
import { useSetRecoilState } from "recoil";
import { productListState } from "./state/products.mjs";

export default function App() {
  const setProducts = useSetRecoilState(productListState);

  useEffect(() => {
    getProducts()
      .then(({ products }) => setProducts(products))
      .catch((e) => console.log(e));
  });
  return (
    <>
      <Navigation />
      <main className="mx-auto py-5 flex flex-col items-center gap-4 bg-gray-100">
        <Routes>
          <Route path="/" element={<Home categories={["categories"]} />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </>
  );
}
