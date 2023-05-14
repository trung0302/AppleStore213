/* eslint-disable import/no-anonymous-default-export */
import axiosInstance from "./axiosInstance";

const getAllProduct = async () => {
    return await axiosInstance.get(`/api/product`);
};

const getProductById = async (id) => {
    return await axiosInstance.get(`/api/product/${id}`);
}

export default {
    getAllProduct,
    getProductById
};
