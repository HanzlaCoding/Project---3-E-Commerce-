import axios from "../../api/AxiosInstance";
import { loadProductData } from "../reducers/ProductSlice";

export const asyncDeleteProducts = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`/products/${id}`);
    dispatch(loadProductData(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const asyncUpdateProducts =
  (id, product) => async (dispatch, getState) => {
    try {
      const { data } = await axios.patch(`/products/${id}`, product);
      console.log(data);
      dispatch(loadProductData(data));
    } catch (error) {
      console.log(error.message);
    }
  };

export const asyncRenderProducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadProductData(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const asyncCreateProduct =
  (productData) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/products", productData);
      dispatch(asyncRenderProducts());
    } catch (error) {
      console.log(error.message);
    }
  };
