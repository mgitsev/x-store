import { atom, selector } from "recoil";

export const productCategoriesState = atom({
  key: "ProductCategories",
  default: [
    "all",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ].sort((a, b) => a > b),
});

export const productSorterState = atom({
  key: "SorterState",
  default: ["price", "rating"],
});

export const productSorterTypeState = atom({
  key: "SorterTypeState",
  default: ["ascending", "descending"],
});

export const productListState = atom({
  key: "Products",
  default: [],
});

export const productListFilterState = atom({
  key: "ProductsByCategoryFilter",
  default: "all",
});

export const productListSorterState = atom({
  key: "ProductSorter",
  default: "price",
});

export const productListSorterTypeState = atom({
  key: "ProductSorterType",
  default: "ascending",
});

export const filteredProductList = selector({
  key: "FilteredByCategoryProductList",
  get: ({ get }) => {
    const filter = get(productListFilterState);
    const sorter = get(productListSorterState);
    const sorterType = get(productListSorterTypeState);
    const list = get(productListState);
    const res =
      filter === "all"
        ? list
        : list.filter((product) => product.category === filter);

    return [...res].sort((a, b) => {
      return sorterType === "ascending"
        ? a[sorter] - b[sorter]
        : b[sorter] - a[sorter];
    });
  },
});
