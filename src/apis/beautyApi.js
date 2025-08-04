import axios from "axios";

const beautyURL = "https://dummyjson.com/products";
const getBeautys = async () => {
  try {
    const res = await axios.get(beautyURL);
    console.log(res);
    console.log(res.data);
    console.log(res.data.products);
    return res.data.products;
  } catch (error) {
    console.log(error);
  }
};
const getBeauty = async id => {
  try {
    const res = await axios.get(`${beautyURL}/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
const postBeauty = async () => {};
const deleteBeauty = async () => {};
const putBeauty = async () => {};
const patchBeauty = async () => {};

export {
  getBeautys,
  getBeauty,
  postBeauty,
  deleteBeauty,
  putBeauty,
  patchBeauty,
};
