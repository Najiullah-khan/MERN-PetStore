import axios from "axios";
const url = "http://localhost:5000";

export const addProduct = async (productData) => {
  return await axios.post(`${url}/addProduct`, productData);
};
export const getDog = async () => {
  return await axios.get(`${url}/viewProduct/Dog`);
};
export const getProduct = async () => {
  return await axios.get(`${url}/viewProduct/Product`);
};

export const getCat = async()=> {
  return await axios.get(`${url}/viewProduct/Cat`)
}
export const getHorse = async()=> {
  return await axios.get(`${url}/viewProduct/Horse`)
}
export const getBirds = async()=> {
  return await axios.get(`${url}/viewProduct/Birds`)
}
export const deleteProduct = async (id) => {

  return await axios.delete(`${url}/deleteProduct/${id}`);
};
export const editProduct = async (id, productData) => {
  return await axios.put(`${url}/editProduct/${id}`, productData);
};

export const getProductById = async(id)=> {
  return await axios.get(`${url}/viewProduct/${id}`)
}
