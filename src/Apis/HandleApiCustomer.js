/* eslint-disable import/no-anonymous-default-export */
import axiosInstance from "./axiosInstance";

export const GetUserInfor = async () => {
    return await axiosInstance.get(`/api/auth/me`);
};

const UpdateInfor = async (id,data) => {
    return await axiosInstance.put(`/api/auth/${id}`,data);
};

const UpdatePass = async (id,data) => {
    return await axiosInstance.put(`/api/auth/password/${id}`,data);
};


const AddAdress = async (id, data) => {
    return await axiosInstance.post(
        `/api/auth/adress/${id}`,
        data
    );
};
const DelAdress = async (id) => {
    return await axiosInstance.delete(
        `/api/auth/adress/${id}`
    );
};

const GetDG = async (id,order) => {
    return await axiosInstance.get(
        `/api/danhgia?kh=${id}&sortOrder=${order}`
    );
};

export default {
UpdateInfor,
UpdatePass,
GetUserInfor,
AddAdress,
DelAdress,
GetDG,

};
