// import Select from "react-select/dist/declarations/src/Select";
import Select from "react-select";
// import CreatableSelect from "react-select/creatable";
import { useEffect, useState } from "react";
import axios from "axios";

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
    // https://provinces.open-api.vn/api/p/1?depth=2
    // https://provinces.open-api.vn/api/p/${selectedOption.code}?depth=2

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
            <div className="w-full bg-white px-8 py-[16px] rounded-[8px] mt-6">
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
                    <div className="flex items-center">
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
                            className="text-2xl ml-[4px] mb-[2px]"
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
                    <div></div>
                    {showStore && (
                        <Select
                            className="text-[16px] col-span-2"
                            value={selectedDistrict}
                            onChange={handleChangeDistrict}
                            options={districts}
                            closeMenuOnSelect={true}
                            styles={customStyles}
                            placeholder="Chọn địa chỉ cửa hàng"
                        />
                    )}
                    {showAddress && (
                        <Select
                            className="text-[16px] col-span-2"
                            value={selectedDistrict}
                            onChange={handleChangeDistrict}
                            options={districts}
                            closeMenuOnSelect={true}
                            styles={customStyles}
                            placeholder="Chọn địa chỉ cửa hàng 2"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Payment;
