/* eslint-disable import/no-anonymous-default-export */
import axiosInstance from "./axiosInstance";

export const GetUserInfor = async () => {
    return await axiosInstance.get(`/auth/me`);
};

const UpdateInfor = async (id,data) => {
    return await axiosInstance.put(`/auth/${id}`,data);
};

const UpdatePass = async (id,data) => {
    return await axiosInstance.put(`/auth/password/${id}`,data);
};


const AddAdress = async (id, data) => {
    return await axiosInstance.post(
        `/auth/adress/${id}`,
        data
    );
};
const DelAdress = async (id) => {
    return await axiosInstance.delete(
        `/auth/adress/${id}`
    );
};

const GetDG = async (id,order) => {
    return await axiosInstance.get(
        `/danhgia?kh=${id}&sortOrder=${order}`
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
