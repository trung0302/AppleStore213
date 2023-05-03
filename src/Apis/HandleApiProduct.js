/* eslint-disable import/no-anonymous-default-export */
import axiosInstance from "./axiosInstance";

const getAllProduct = async () => {
    return await axiosInstance.get(`/product`);
};



export default {
    getAllProduct,
};
