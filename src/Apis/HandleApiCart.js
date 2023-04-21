/* eslint-disable import/no-anonymous-default-export */
import axiosInstance from './axiosInstance';

const getCartByMaKH = async (id) => {
    return await axiosInstance.get(`/cart?makh=${id}`);
};

// const getEmployeeById = async(id) =>{
//     return await axiosInstance.get(`/users/employees/${id}`);
// }

// const getEmployeeByName = async (name) => {
//     return await axiosInstance.get(`/users/employees?name=${name}`);
// };

export default {
    getCartByMaKH,
    // getEmployeeById,
    // getEmployeeByName,
};