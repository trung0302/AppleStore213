/* eslint-disable import/no-anonymous-default-export */
import axiosInstance from "./axiosInstance";

const getAllProduct = async (loaisanpham, phanloai, page = 1) => {
    var query = `/product/?loaisanpham=${loaisanpham}&page=${page}`;
    if (phanloai) {
        query += `&phanloai=${phanloai}`
    }
    return await axiosInstance.get(query);
};

const getAllSubCategory = async (loaisanpham) => {
    return await axiosInstance.get(`/product/subcategory/${loaisanpham}`);
}

export default {
    getAllProduct,
    getAllSubCategory
};
