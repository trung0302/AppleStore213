// import Select from "react-select/dist/declarations/src/Select";
import Select from "react-select";
// import CreatableSelect from "react-select/creatable";
import { useEffect, useState } from "react";
import axios from "axios";
import images from "../../../../assets/image";

function Payment() {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [method, setMethod] = useState("Store");

    const [showStore, setShowStore] = useState(true);
    const [showAddress, setShowAddress] = useState(false);

    // Render tên tỉnh, tpho
    useEffect(() => {
        axios
            .get(`https://provinces.open-api.vn/api/p`)
            .then((response) => {
                const cities = response.data.map((res) => ({
                    code: res.code,
                    label: res.name,
                }));
                setProvinces(cities);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Handle change province
    const handleChangeProvince = (selectedOption) => {
        setSelectedProvince(selectedOption);
        setSelectedDistrict(null);
        axios
            .get(
                `https://provinces.open-api.vn/api/p/${selectedOption.code}?depth=2`
            )
            .then((response) => {
                console.log(response.data);
                const options = response.data.districts.map((item) => ({
                    value: item.code,
                    label: item.name,
                }));
                setDistricts(options);
            });
    };

    // Handle change District
    const handleChangeDistrict = (selectedOption) => {
        setSelectedDistrict(selectedOption);
    };

    // Handle change radio input
    const handleChangeMethod = (e) => {
        setMethod(e.target.value);
        setShowStore(!showStore);
        setShowAddress(!showAddress);
        console.log(e.target.value);
    };

    // Custome select style
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: state.isSelected ? "1px solid #ddd" : "1px solid #ddd",
        }),
    };

    return (
        <div>
            <div className="w-full bg-white p-8 rounded-[8px] mt-6">
                {/* Thông tin khách hàng */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <input
                        type="text"
                        value="Trung"
                        placeholder="Nhập họ tên"
                        required
                        className="col-span-2 h-[48px] px-[16px] py-[8px] text-[16px] text-[#777]
                         outline-none border border-[#ddd] rounded-[8px] focus:border-[#0066cc] focus:text-black"
                    />
                    <input
                        type="text"
                        value="090010008"
                        placeholder="Nhập số điện thoại"
                        required
                        className="h-[48px] px-[16px] py-[8px] text-[16px] text-[#777] 
                        outline-none border border-[#ddd] rounded-[8px] focus:border-[#0066cc] focus:text-black"
                    />
                    <input
                        type="text"
                        value="uit@gmail.com"
                        placeholder="Nhập Email"
                        required
                        className="h-[48px] px-[16px] py-[8px] text-[16px] text-[#777] 
                        outline-none border border-[#ddd] rounded-[8px] focus:border-[#0066cc] focus:text-black"
                    />
                </div>

                {/* Hình thức nhận hàng */}
                <label className="font-semibold text-2xl">
                    Hình thức nhận hàng
                </label>
                <div className="flex items-center mt-[8px]">
                    <input
                        id="store"
                        type="radio"
                        name="store"
                        value="Store"
                        onChange={handleChangeMethod}
                        checked={method === "Store"}
                    />
                    <label
                        htmlFor="store"
                        className="text-2xl ml-[4px] mt-[2px]"
                    >
                        Nhận tại cửa hàng
                    </label>
                    <input
                        id="address"
                        name="store"
                        type="radio"
                        className="ml-8"
                        onChange={handleChangeMethod}
                        value="Ship"
                        checked={method === "Ship"}
                    />
                    <label
                        htmlFor="address"
                        className="text-2xl ml-[4px] mb-[2px]"
                    >
                        Giao hàng tận nơi
                    </label>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <div className="text-[14px] font-light my-[8px]">
                            Tỉnh, thành phố:
                        </div>
                        <Select
                            options={provinces}
                            // isClearable
                            className="text-[16px]"
                            closeMenuOnSelect={true}
                            getOptionLabel={(option) => option.label}
                            getOptionValue={(option) => option.code}
                            styles={customStyles}
                            placeholder="Chọn tỉnh, thành phố"
                            onChange={handleChangeProvince}
                        />
                    </div>
                    <div>
                        <div className="text-[14px] font-light my-[8px]">
                            Quận, huyện:
                        </div>
                        <Select
                            className="text-[16px]"
                            value={selectedDistrict}
                            onChange={handleChangeDistrict}
                            options={districts}
                            closeMenuOnSelect={true}
                            isDisabled={!selectedProvince}
                            styles={customStyles}
                            placeholder="Chọn quận/huyện"
                        />
                    </div>

                    {showStore && (
                        <div className="col-span-2">
                            <div className="text-[14px] font-light mb-[8px]">
                                Cửa hàng:
                            </div>
                            <Select
                                className="text-[16px]"
                                value={selectedDistrict}
                                onChange={handleChangeDistrict}
                                options={districts}
                                closeMenuOnSelect={true}
                                styles={customStyles}
                                placeholder="Chọn địa chỉ cửa hàng"
                            />
                        </div>
                    )}
                    {showAddress && (
                        <div className="col-span-2">
                            <div className="text-[14px] mb-3">
                                Địa chỉ cụ thể:
                            </div>
                            <input
                                type="text"
                                // value="Trung"
                                placeholder="Nhập số nhà, tên đường"
                                required
                                className="h-[48px] w-full px-[16px] py-[8px] text-[16px] text-[#777]
                             outline-none border border-[#ddd] rounded-[8px] focus:border-[#0066cc] focus:text-black"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Thông tin thanh toán */}
            <div className="w-full bg-white p-8 rounded-[8px] mt-6">
                <label className="font-semibold text-2xl">
                    Thông tin thanh toán
                </label>
                <div className="text-[14px] text-[#777] mt-[8px] mb-4">
                    Quý khách vui lòng lựa chọn các hình thức thanh toán dưới
                    đây:
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <label
                        htmlFor="momo"
                        className="flex border border-solid border-[#ddd] rounded-[8px] py-5 px-10 items-center cursor-pointer"
                    >
                        <input
                            type="radio"
                            id="momo"
                            name="method"
                            value="momo"
                        />
                        <img
                            src={images.momo}
                            alt="Momo"
                            className="h-[36px] w-[36px] rounded-[8px] mx-5"
                        />
                        <div className="text-[14px]">Thanh toán bằng Momo</div>
                    </label>
                    <label
                        htmlFor="zalopay"
                        className="flex border border-solid border-[#ddd] rounded-[8px] py-5 px-10 items-center cursor-pointer"
                    >
                        <input
                            type="radio"
                            id="zalopay"
                            name="method"
                            value="zalopay"
                        />
                        <img
                            src={images.zalopay}
                            alt="ZaloPay"
                            className="h-[36px] w-[36px] rounded-[8px] mx-5"
                        />
                        <div className="text-[14px]">
                            Thanh toán bằng ZaloPay
                        </div>
                    </label>
                    <label
                        htmlFor="shipcod"
                        className="flex border border-solid border-[#ddd] rounded-[8px] py-5 px-10 items-center cursor-pointer"
                    >
                        <input
                            type="radio"
                            id="shipcod"
                            name="method"
                            value="shipcod"
                        />
                        <img
                            src={images.shipcod}
                            alt="COD"
                            className="h-[36px] w-[36px] rounded-[8px] mx-5"
                        />
                        <div className="text-[14px]">
                            Thanh toán khi nhận hàng
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Payment;
