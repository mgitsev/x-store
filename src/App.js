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
    //getCategories().then((categories) => setCategories(categories));
  }, []);
  return (
    <>
      <Navigation />
      <main className="px-10 py-5">
        <Routes>
          <Route path="/" element={<Home categories={["categories"]} />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </>
  );
}
