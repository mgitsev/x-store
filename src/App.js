import Navigation from "./components/Navigation";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { useEffect } from "react";
import { getProducts } from "./apis/products.mjs";
import { useSetRecoilState } from "recoil";
import { productListState } from "./state/products.mjs";
import Product from "./pages/Product";
import Error from "./pages/Error";

export default function App() {
  const setProducts = useSetRecoilState(productListState);
  const navi = useNavigate();

  useEffect(() => {
    getProducts()
      .then(({ products }) => setProducts(products))
      .catch((e) => navi("/404"));
  }, []);
  return (
    <>
      <Navigation />
      <main className="mx-auto py-5 flex flex-col items-center gap-4 bg-gray-100">
        <Routes>
          <Route path="/" element={<Home categories={["categories"]} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/404" element={<Error />} />
        </Routes>
      </main>
    </>
  );
}
