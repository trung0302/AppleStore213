import axiosInstance from './axiosInstance';

//GET
const getAllBH = async() => {
    return await axiosInstance.get(`/baohanh`);
}

const getBHByID = async(id) => {
    return await axiosInstance.get(`/baohanh/${id}`);
}

const getBHBySDT = async(sdt) => {
    return await axiosInstance.get(`/baohanh/sdt/${sdt}`);
}

//POST
const addBH = async(data) => {
    return await axiosInstance.post(`/baohanh`,data);
}

const addCTBH = async(id,data) => {
    return await axiosInstance.put(`/baohanh/ctbh/${id}`,data);
}

//PUT
const updateBH = async(id,data) => {
    return await axiosInstance.put(`/baohanh/${id}`,data);
}

const updateCTBH = async(id,ctbhId,data) => {
    return await axiosInstance.put(`/baohanh/ctbh/${id}/${ctbhId}`,data);
}

//DELETE
const deleteBH = async(id) => {
    return await axiosInstance.delete(`/baohanh/${id}`);
}

const deleteCTBH = async(id,ctbhId) => {
    return await axiosInstance.delete(`/baohanh/${id}/${ctbhId}`);
}

export default {
    getAllBH,
    getBHByID,
    getBHBySDT,
    addBH,
    addCTBH,
    updateBH,
    updateCTBH,
    deleteBH,
    deleteCTBH
}
