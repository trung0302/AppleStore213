/* eslint-disable import/no-anonymous-default-export */
import axiosInstance from "./axiosInstance";

const getCartByMaKH = async (id) => {
    return await axiosInstance.get(`/cart?makh=${id}`);
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
    getCartByMaKH,
    addSpToCart,
    updateCart,
    deleteSpFromCart,
};
