import axios from "axios";

const baseURL = "https://dummyjson.com/products";
export async function getProducts(limit = 100, skip = 0) {
  const url = `${baseURL}?limit=${limit}&skip=${skip}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function getCategories(cb) {
  const url = `${baseURL}/categories`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
    // hendlaj greshka so callback u useEffect
    //cb(err)
  }
}
