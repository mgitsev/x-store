import axios from "axios";

const baseURL = "https://dummyjson.com/products";
export async function getProducts(limit = 100, skip = 0) {
  const url = `${baseURL}?limit=${limit}&skip=${skip}`;
  try {
    const { data } = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Set-Cookie",
        "Content-Type": "application/json",
        "SameSite": "None",
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getCategories() {
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
