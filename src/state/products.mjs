import { atom, selector } from "recoil";

export const productListState = atom({
  key: "Products",
  default: [],
});

export const categoryFilterState = atom({
  key: "CategoryFilter",
  default: "all",
});

export const sorterState = atom({
  key: "ProductSorter",
  default: "price",
});

export const sorterTypeState = atom({
  key: "ProductSorterType",
  default: "ascending",
});

export const filteredProductList = selector({
  key: "FilteredByCategoryProductList",
  get: ({ get }) => {
    const filter = get(categoryFilterState);
    const sorter = get(sorterState);
    const sorterType = get(sorterTypeState);
    const list = get(productListState);
    let res =
      filter === "all"
        ? list
        : list.filter((product) => product.category === filter);

    return res.sort((a, b) => {
      return sorterType === "ascending"
        ? a[sorter] - b[sorter]
        : b[sorter] - a[sorter];
    });
  },
});
