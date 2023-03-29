import React, { useState } from 'react'
import images from "../../../assets/image"


export default function DetailSection() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className='w-[1200px] mx-auto'>
            <div className='flex gap-[20px] mt-[32px]'>
                <div className='w-[590px] h-[215px] bg-white flex py-[38px] cursor-pointer rounded-[8px] drop-shadow-[1px_1px_28px_0rgba(0,0,0,0.12)]'>
                    <img src={images.compareIphone} alt='compare iphone' className='h-[139px] ml-[20px] px-[48px] bg-white ' />
                    <div className='flex justify-around flex-col w-[200px]'>
                        <h4 className='text-[24px] text-[#1D1D1F] font-bold'>Tìm iPhone phù hợp với bạn</h4>
                        <a href='/phu-kien' className='text-[#0066CC] text-[15px]'>So sánh các iPhone &gt;</a>
                    </div>
                </div>
                <div className='w-[590px] h-[215px] bg-white flex py-[38px] cursor-pointer rounded-[8px] drop-shadow-[1px_1px_28px_0rgba(0,0,0,0.12)]'>
                    <img src={images.iphoneAccessory} alt='accessory' className='h-[139px] ml-[20px] px-[48px] bg-white' />
                    <div className='flex justify-around flex-col w-[200px]'>
                        <h4 className='text-[24px] text-[#1D1D1F] font-bold'>Phụ kiện iPhone thường mua kèm</h4>
                        <a href='/phu-kien' className='text-[#0066CC] text-[15px]'>Tìm phụ kiện &gt;</a>
                    </div>
                </div>
            </div>

            <div className={`${!showMore && 'h-[500px]'} mt-[40px] bg-white p-[40px] pb-[80px] overflow-hidden relative`}>
                <h2 className='text-[24px] text-[#1d1d1f] font-bold mb-[14px]'>Lịch sử hình thành và phát triển của iPhone</h2>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>iPhone là dòng điện thoại thông minh được phát triển từ Apple Inc, được ra mắt lần đầu tiên bởi Steve Jobs và mở bán năm 2007. Bên cạnh tính năng của một máy điện thoại thông thường, iPhone còn được trang bị màn hình cảm ứng, camera, khả năng chơi nhạc và chiếu phim, trình duyệt web... Phiên bản thứ hai là iPhone 3G ra mắt tháng 7 năm 2008, được trang bị thêm hệ thống định vị toàn cầu, mạng 3G tốc độ cao. Trải qua 15 năm tính đến nay đã có đến 34 mẫu iPhone được sản xuất từ dòng 2G cho đến iPhone 13 Pro Max và Apple là một trong những thương hiệu điện thoại được yêu thích và sử dụng phổ biến nhất trên thế giới.</p>
                <div className='mt-[14px] mb-[11px] h-[22px]'></div>
                <h2 className='text-[24px] text-[#1d1d1f] font-bold mb-[14px]'>iPhone có những mã máy nào?</h2>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>Những chiếc iPhone do Apple phân phối tại thị trường nước nào thì sẽ mang mã của nước đó. Ví dụ: LL: Mỹ, ZA: Singapore, TH: Thái Lan, JA: Nhật Bản, Những mã này xuất hiện tại Việt Nam đều là hàng xách tay, nhập khẩu. Còn tại Việt Nam, iPhone sẽ được mang mã VN/A. Tất cả các mã này đều là hàng chính hãng phân phối của Apple. Lợi thế khi bạn sử dụng iPhone mã VN/A đó là chế độ bảo hành tốt hơn với 12 tháng theo tiêu chuẩn của Apple. iPhone của bạn sẽ được bảo hành tại tất cả các trung tâm bảo hành Apple tại Việt Nam, một số mã quốc tế bị từ chối bảo hành và phải đem ra các trung tâm bảo hành Apple tại nước ngoài. Rất là phức tạp đúng không nào?</p>
                <div className='mt-[14px] mb-[11px] h-[22px]'></div>
                <h2 className='text-[24px] text-[#1d1d1f] font-bold mb-[14px]'>Apple đã khai tử những dòng iPhone nào?</h2>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>Tính đến nay, Apple đã khai tử (ngừng sản xuất) các dòng iPhone đời cũ bao gồm: iPhone 2G, iPhone 3G, iPhone 4, iPhone 5 series, iPhone 6 series, iPhone 7 series, iPhone 8 series, iPhone X series, iPhone SE (thế hệ 1), iPhone SE (thế hệ 2), iPhone 11 Pro, iPhone 11 Pro Max, iPhone 12 Pro, iPhone 12 Pro Max.</p>
                <div className='mt-[14px] mb-[11px] h-[22px]'></div>
                <h2 className='text-[24px] text-[#1d1d1f] font-bold mb-[14px]'>ShopDunk cung cấp những dòng iPhone nào?</h2>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>ShopDunk là một trong những thương hiệu bán lẻ được Apple uỷ quyền tại Việt Nam, đáp ứng được các yêu cầu khắt khe từ Apple như: dịch vụ kinh doanh, dịch vụ chăm sóc khách hàng, vị trí đặt cửa hàng...</p>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>Những chiếc iPhone do Apple Việt Nam phân phối tại nước ta đều mang mã VN/A và được bảo hành 12 tháng theo theo tiêu chuẩn tại các trung tâm bảo hành Apple. Các dòng iPhone được cung cấp tại ShopDunk gồm: iPhone 11, iPhone 12, iPhone 12 mini, iPhone 13 series, iPhone SE 3 (2022).</p>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>Phone 11 được trang bị màn hình LCD và không hỗ trợ HDR, nâng cấp với chế độ chụp đêm Night Mode cùng Deep Fusion. Camera trước được nâng độ phân giải từ 7MP lên thành 12MP. Được trang bị chip A13 Bionic và hỗ trợ công nghệ WiFi 6. Với 6 màu sắc bắt mắt: Đen, Trắng, Xanh Mint, Đỏ, Vàng, Tím.</p>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>iPhone 12 mini, iPhone 12 là những chiếc iPhone đầu tiên của hãng hỗ trợ mạng di động 5G. Apple đã thay đổi thiết kế của iPhone từ khung viền bo tròn thành khung viền vuông vức như những dòng iPhone 5 và sử dụng mặt kính trước Ceramic Shield. Ngoài ra, hộp của thiết bị iPhone 12 và các dòng iPhone sau đều đã được loại bỏ củ sạc.</p>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>Tháng 9 năm 2021, Apple đã chính thức ra mắt 4 chiếc iPhone mới của hãng bao gồm iPhone 13 mini, iPhone 13, iPhone 13 Pro, iPhone 13 Pro Max. Các cụm Camera trên bộ 4 iPhone mới của Apple đều to hơn một chút so với thế hệ tiền nhiệm và phần tai thỏ ở mặt trước cũng được làm nhỏ hơn. Đối với iPhone 13 Pro và iPhone 13 Pro Max, Apple đã nâng cấp bộ nhớ tối đa của máy lên đến 1TB. Đi cùng với đó là tần số quét của dòng iPhone 13 cũng đã được nâng cấp lên 120Hz.</p>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>iPhone SE thế hệ 3 (còn gọi là iPhone SE 3 hay iPhone SE 2022) được Apple công bố vào tháng 3 năm 2022, kế nhiệm iPhone SE 2. Đây là một phần của iPhone thế hệ thứ 15, cùng với iPhone 13 và iPhone 13 Pro. Thế hệ thứ 3 có kích thước và yếu tố hình thức của thế hệ trước, trong khi các thành phần phần cứng bên trong được lựa chọn từ dòng iPhone 13, bao gồm cả hệ thống trên chip A15 Bionic.</p>
                <div className='mt-[14px] mb-[11px] h-[22px]'></div>
                <h2 className='text-[24px] text-[#1d1d1f] font-bold mb-[14px]'>Mua iPhone giá tốt nhất tại ShopDunk</h2>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>ShopDunk là đại lý uỷ quyền Apple tại Việt Nam với hệ thống 40 cửa hàng trên toàn quốc, trong đó có 11 Mono Store. Đến nay, ShopDunk đã trở thành điểm dừng chân lý tưởng cho iFans nói chung và thế hệ GenZ nói riêng bởi độ chuẩn và chất. Không gian thiết kế và bài trí sản phẩm theo tiêu chuẩn của Apple, chia theo từng khu vực rõ ràng, bàn trải nghiệm rộng rãi và đầy đủ sản phẩm.</p>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>Tại ShopDunk luôn có mức giá tốt nhất cho người dùng cùng với nhiều chương trình hấp dẫn diễn ra liên tục trong tháng. Hãy đến với chúng tôi và trải nghiệm ngay những mẫu iPhone mới nhất với đội ngũ chuyên viên tư vấn được đào tạo bài bản từ Apple, sẵn sàng hỗ trợ bạn về sản phẩm, kỹ thuật hay các công nghệ mới nhất từ Apple.</p>

                {!showMore ? <div className='absolute left-0 bottom-0 cursor-pointer flex items-center justify-center bg-white h-[77px] w-full text-[#0066CC] text-[14px]' onClick={() => setShowMore(true)}>Xem thêm</div>
                    : <div className='absolute left-0 bottom-0 cursor-pointer flex items-center justify-center bg-white h-[77px] w-full text-[#0066CC] text-[14px]' onClick={() => setShowMore(false)}>Thu gọn</div>}
            </div>
        </div>
    )
}
