import axiosInstance from './axiosInstance';

//GET
const getAllKM = async() => {
    return await axiosInstance.get('/khuyenmai');
}

const getKMByID = async(id) =>{
    return await axiosInstance.get(`/khuyenmai/${id}`);
}

const getKMByApdung =async (apdung) => {
    return await axiosInstance.get(`/khuyenmai/apdung/${apdung}`);
}

const getKMByApdungAndPhanTram= async(apdung, phantramkm) => {
    return await axiosInstance.get(`/khuyenmai/apdung&phantram/${apdung}/${phantramkm}`);
}

//POST
const addKM = async(data) => {
    return await axiosInstance.post("/khuyenmai", data);
}

//PUT
const updateKM = async(id,data) => {
    return await axiosInstance.put(`/khuyenmai/${id}`, data);
}

const updateDecreaseSL = async(id)=> {
    return await axiosInstance.put(`/khuyenmai/apdung/${id}`);
}

//DELETE
const deleteKM = async(id) => {
    return await axiosInstance.delete(`/khuyenmai/${id}`);
}

export default {
    getAllKM,
    getKMByID,
    getKMByApdung,
    getKMByApdungAndPhanTram,
    addKM,
    updateKM,
    updateDecreaseSL,
    deleteKM
};