import axiosInstance from './axiosInstance';

const thanhtoanMoMo = async(amount) => {
    return await axiosInstance.post("/thanhtoan/momo", {
        amount: amount
    });
}

const thanhtoanZalo = async(amount) => {
    return await axiosInstance.post("/thanhtoan/zalo", {
        amount: amount
    });
}

const checkZalo = async(orderId) => {
    return await axiosInstance.post("/thanhtoan/checkZalo", {
        orderId: orderId
    });
}

const checkMoMo= async(orderId) => {
    return await axiosInstance.post("/thanhtoan/checkMomo", {
        orderId: orderId
    });
}

export default {
    thanhtoanMoMo,
    thanhtoanZalo,
    checkZalo,
    checkMoMo
}