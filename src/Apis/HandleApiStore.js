/* eslint-disable import/no-anonymous-default-export */
import axiosInstance from "./axiosInstance";

const getAllStore = async () => {
    return await axiosInstance.get(`/store`);
};

const getStoreByDistrict = async (code) => {
    return await axiosInstance.get(`/store/district?code=${code}`);
};

const getStoreByProvince = async (code) => {
    return await axiosInstance.get(`/store/province?code=${code}`);
};

const addSpToCart = async (data) => {
    return await axiosInstance.post(`/cart`, data);
};

const updateCart = async (makh, masp, mausac, data) => {
    return await axiosInstance.put(
        `/cart?makh=${makh}&masp=${masp}&mausac=${mausac}`,
        data
    );
};

const deleteSpFromCart = async (makh, masp) => {
    return await axiosInstance.delete(`/cart?makh=${makh}&masp=${masp}`);
};

export default {
    getAllStore,
    getStoreByDistrict,
    getStoreByProvince,
    addSpToCart,
    updateCart,
    deleteSpFromCart,
};
