/* eslint-disable import/no-anonymous-default-export */
import axiosInstance from "./axiosInstance";

const UpdateInfor = async (id,data) => {
    return await axiosInstance.post(`/auth/${id}`,data);
};

const Updatepass = async (id,data) => {
    return await axiosInstance.post(`/auth/pass/${id}`, data);
};

const Updateadress = async (id, data) => {
    return await axiosInstance.put(
        a,
        data
    );
};


export default {
Updateadress,
UpdateInfor,
Updatepass
};
