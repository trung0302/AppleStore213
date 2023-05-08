/* eslint-disable import/no-anonymous-default-export */
import axiosInstance from "./axiosInstance";

const getCartByMaKH = async (id) => {
    return await axiosInstance.get(`/cart?makh=${id}`);
};

const addSpToCart = async (data) => {
    return await axiosInstance.post(`/cart`, data);
};

const updateCart = async (makh, masp, mausac, rom, data) => {
    return await axiosInstance.put(
        `/cart?makh=${makh}&masp=${masp}&mausac=${mausac}&rom=${rom}`,
        data
    );
};

const deleteSpFromCart = async (makh, masp, mausac, rom) => {
    return await axiosInstance.delete(`/cart?makh=${makh}&masp=${masp}&mausac=${mausac}&rom=${rom}`);
};

export default {
    getCartByMaKH,
    addSpToCart,
    updateCart,
    deleteSpFromCart,
};
