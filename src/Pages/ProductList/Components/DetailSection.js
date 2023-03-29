import React, { useEffect, useState } from 'react'
import images from "../../../assets/image"


const iphoneDetail = {
    heading1: "Tìm iPhone phù hợp với bạn",
    image1: images.compareIphone,
    text1: "So sánh các iPhone",
    heading2: "Phụ kiện iPhone thường mua kèm",
    image2: images.iphoneAccessory,
    text2: "Tìm phụ kiện"
}

const ipadDetail = {
    heading1: "Tìm iPad phù hợp với bạn",
    image1: images.compareIpad,
    text1: "So sánh các iPad",
    heading2: "Phụ kiện iPad thường mua kèm",
    image2: images.ipadAccessory,
    text2: "Tìm phụ kiện"
}

const macDetail = {
    heading1: "Tìm Mac phù hợp với bạn",
    image1: images.compareMac,
    text1: "So sánh các Mac",
    heading2: "Phụ kiện Mac thường mua kèm",
    image2: images.macAccessory,
    text2: "Tìm phụ kiện"
}

const watchDetail = {
    heading1: "Tìm Apple Watch phù hợp với bạn",
    image1: images.compareWatch,
    text1: "So sánh các Apple Watch",
    heading2: "Phụ kiện Apple Watch thường mua kèm",
    image2: images.watchAccessory,
    text2: "Tìm phụ kiện"
}


export default function DetailSection({ type }) {
    const [showMore, setShowMore] = useState(false);
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        switch (type) {
            case "iPhone":
                setDetail(iphoneDetail)
                break;
            case "iPad":
                setDetail(ipadDetail)
                break;
            case "Mac":
                setDetail(macDetail)
                break;
            case "Watch":
                setDetail(watchDetail)
                break;
            default:
                setDetail(null)
                break;
        }
    }, [type])

    return (
        <div className='w-[1200px] mx-auto'>
            {detail && <div className='flex gap-[20px] mt-[32px]'>
                <div className='w-[590px] h-[215px] bg-white flex py-[38px] cursor-pointer rounded-[8px] drop-shadow-[1px_1px_28px_0rgba(0,0,0,0.12)]'>
                    <img src={detail.image1} alt='compare iphone' className='h-[139px] ml-[20px] px-[48px] bg-white ' />
                    <div className='flex justify-around flex-col w-[200px]'>
                        <h4 className='text-[24px] text-[#1D1D1F] font-bold'>{detail.heading1}</h4>
                        <a href='/phu-kien' className='text-[#0066CC] text-[15px]'>{detail.text1} &gt;</a>
                    </div>
                </div>
                <div className='w-[590px] h-[215px] bg-white flex py-[38px] cursor-pointer rounded-[8px] drop-shadow-[1px_1px_28px_0rgba(0,0,0,0.12)]'>
                    <img src={detail.image2} alt='accessory' className='h-[139px] ml-[20px] px-[48px] bg-white' />
                    <div className='flex justify-around flex-col w-[200px]'>
                        <h4 className='text-[24px] text-[#1D1D1F] font-bold'>{detail.heading2}</h4>
                        <a href='/phu-kien' className='text-[#0066CC] text-[15px]'>{detail.text2} &gt;</a>
                    </div>
                </div>
            </div>}

            {type === "iPhone" ? <div className={`${!showMore && 'h-[500px]'} mt-[40px] bg-white p-[40px] pb-[80px] overflow-hidden relative`}>
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
                <div className='h-[22px]'></div>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>Những chiếc iPhone do Apple Việt Nam phân phối tại nước ta đều mang mã VN/A và được bảo hành 12 tháng theo theo tiêu chuẩn tại các trung tâm bảo hành Apple. Các dòng iPhone được cung cấp tại ShopDunk gồm: iPhone 11, iPhone 12, iPhone 12 mini, iPhone 13 series, iPhone SE 3 (2022).</p>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>Phone 11 được trang bị màn hình LCD và không hỗ trợ HDR, nâng cấp với chế độ chụp đêm Night Mode cùng Deep Fusion. Camera trước được nâng độ phân giải từ 7MP lên thành 12MP. Được trang bị chip A13 Bionic và hỗ trợ công nghệ WiFi 6. Với 6 màu sắc bắt mắt: Đen, Trắng, Xanh Mint, Đỏ, Vàng, Tím.</p>
                <div className='h-[22px]'></div>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>iPhone 12 mini, iPhone 12 là những chiếc iPhone đầu tiên của hãng hỗ trợ mạng di động 5G. Apple đã thay đổi thiết kế của iPhone từ khung viền bo tròn thành khung viền vuông vức như những dòng iPhone 5 và sử dụng mặt kính trước Ceramic Shield. Ngoài ra, hộp của thiết bị iPhone 12 và các dòng iPhone sau đều đã được loại bỏ củ sạc.</p>
                <div className='h-[22px]'></div>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>Tháng 9 năm 2021, Apple đã chính thức ra mắt 4 chiếc iPhone mới của hãng bao gồm iPhone 13 mini, iPhone 13, iPhone 13 Pro, iPhone 13 Pro Max. Các cụm Camera trên bộ 4 iPhone mới của Apple đều to hơn một chút so với thế hệ tiền nhiệm và phần tai thỏ ở mặt trước cũng được làm nhỏ hơn. Đối với iPhone 13 Pro và iPhone 13 Pro Max, Apple đã nâng cấp bộ nhớ tối đa của máy lên đến 1TB. Đi cùng với đó là tần số quét của dòng iPhone 13 cũng đã được nâng cấp lên 120Hz.</p>
                <div className='h-[22px]'></div>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>iPhone SE thế hệ 3 (còn gọi là iPhone SE 3 hay iPhone SE 2022) được Apple công bố vào tháng 3 năm 2022, kế nhiệm iPhone SE 2. Đây là một phần của iPhone thế hệ thứ 15, cùng với iPhone 13 và iPhone 13 Pro. Thế hệ thứ 3 có kích thước và yếu tố hình thức của thế hệ trước, trong khi các thành phần phần cứng bên trong được lựa chọn từ dòng iPhone 13, bao gồm cả hệ thống trên chip A15 Bionic.</p>
                <div className='mt-[14px] mb-[11px] h-[22px]'></div>
                <h2 className='text-[24px] text-[#1d1d1f] font-bold mb-[14px]'>Mua iPhone giá tốt nhất tại ShopDunk</h2>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>ShopDunk là đại lý uỷ quyền Apple tại Việt Nam với hệ thống 40 cửa hàng trên toàn quốc, trong đó có 11 Mono Store. Đến nay, ShopDunk đã trở thành điểm dừng chân lý tưởng cho iFans nói chung và thế hệ GenZ nói riêng bởi độ chuẩn và chất. Không gian thiết kế và bài trí sản phẩm theo tiêu chuẩn của Apple, chia theo từng khu vực rõ ràng, bàn trải nghiệm rộng rãi và đầy đủ sản phẩm.</p>
                <p className='text-[14px] text-[#515154] leading-10 font-light'>Tại ShopDunk luôn có mức giá tốt nhất cho người dùng cùng với nhiều chương trình hấp dẫn diễn ra liên tục trong tháng. Hãy đến với chúng tôi và trải nghiệm ngay những mẫu iPhone mới nhất với đội ngũ chuyên viên tư vấn được đào tạo bài bản từ Apple, sẵn sàng hỗ trợ bạn về sản phẩm, kỹ thuật hay các công nghệ mới nhất từ Apple.</p>

                {!showMore ? <div className='absolute left-0 bottom-0 cursor-pointer flex items-center justify-center bg-white h-[77px] w-full text-[#0066CC] text-[14px]' onClick={() => setShowMore(true)}>Xem thêm</div>
                    : <div className='absolute left-0 bottom-0 cursor-pointer flex items-center justify-center bg-white h-[77px] w-full text-[#0066CC] text-[14px]' onClick={() => setShowMore(false)}>Thu gọn</div>}
            </div> :
                (type === "iPad" ?
                    <div className={`${!showMore && 'h-[500px]'} mt-[40px] bg-white p-[40px] pb-[80px] overflow-hidden relative`}>
                        <h2 className='text-[24px] text-[#1d1d1f] font-bold mb-[14px]'>iPad là gì ?</h2>
                        <p className='text-[14px] text-[#515154] leading-10 font-light'>iPad là máy tính bảng do Apple Inc. phát triển. Được công bố vào ngày 27 tháng 1 năm 2010, thiết bị này tạo ra một phân loại mới giữa điện thoại thông minh và máy tính xách tay.</p>
                        <p className='text-[14px] text-[#515154] leading-10 font-light'>Tương tự về tính năng so với thiết bị nhỏ và yếu hơn là iPhone hoặc iPod touch, iPad cũng hoạt động trên cùng hệ điều hành iPhone OS đã được sửa đổi với giao diện được thiết kế lại để phù hợp với màn hình lớn.</p>
                        <div className='mt-[14px] mb-[11px] h-[22px]'></div>
                        <h2 className='text-[24px] text-[#1d1d1f] font-bold mb-[14px]'>Tại sao nên mua iPad ?</h2>
                        <p className='text-[14px] text-[#515154] leading-10 font-light'>iPad được trang bị các tính năng tiện ích để phục vụ công việc, nhu cầu giải trí hiệu quả. Trên thực tế vai trò của iPad trong học tập hay làm việc cũng không hề nhỏ nhờ các tính năng:</p>
                        <ul className='list-disc text-[14px] text-[#515154] leading-10 font-light ml-[40px]'>
                            <li>Thiết kế hiện đại và sang chảnh, nhiều màu sắc đa dạng: Xám, Bạc, Vàng Hồng, Xanh Green, Xanh Blue, Tím,..</li>
                            <li>Gọn nhẹ chỉ khoảng 300g. Bạn có thể mang theo mọi nơi một cách thuận tiện.</li>
                            <li>Màn hình sắc nét, rộng, với cảm ứng đa điểm, góc nhìn thoáng giúp cho việc xem phim, đọc báo hay chơi game dễ dàng và thú vị hơn.</li>
                            <li>Kết nối mạng 4G, 5G mọi lúc mọi nơi, phục vụ nhu cầu sử dụng một cách nhanh nhất.</li>
                            <li>Thời lượng pin lên đến 10 tiếng thoải mái sử dụng cả ngày, mang đến trải nghiệm trọn vẹn nhất.</li>
                            <li>Hơn một triệu ứng dụng được thiết kế riêng cho iPad để làm việc hiệu quả, trò chơi, du lịch, hình ảnh, AR, học tập, v.v.</li>
                        </ul>
                        <div className='mt-[14px] mb-[11px] h-[22px]'></div>
                        <h2 className='text-[24px] text-[#1d1d1f] font-bold mb-[14px]'>ShopDunk cung cấp những dòng iPad nào ?</h2>
                        <p className='text-[14px] text-[#515154] leading-10 font-light'>ShopDunk là một trong những thương hiệu bán lẻ được Apple uỷ quyền tại Việt Nam, đáp ứng được các yêu cầu khắt khe từ Apple như: dịch vụ kinh doanh, dịch vụ chăm sóc khách hàng, vị trí đặt cửa hàng,…</p>
                        <p className='text-[14px] text-[#515154] leading-10 font-light'>Những chiếc máy tính Mac do Apple Việt Nam phân phối tại nước ta đều mang mã ZA/A và được bảo hành 12 tháng theo theo tiêu chuẩn tại các trung tâm bảo hành Apple. Các sản phẩm có tem của công ty TNHH Apple Việt Nam đều là hàng chính hãng. Mã ZA/A là vì iPad hiện chưa có mã riêng VN/A, trước đây iPad còn có mã THA.</p>
                        <p className='text-[14px] text-[#515154] leading-10 font-light'>Các dòng máy tính Mac được cung cấp tại ShopDunk gồm: iPad gen 9, iPad Air 4, iPad Air 5, iPad mini 6, iPad Pro M1.</p>
                        <ul className='list-disc text-[14px] text-[#515154] leading-10 font-light ml-[40px]'>
                            <li>iPad gen 9: iPad sở hữu màn hình Retina 10,2 inch tuyệt đẹp có True Tone, chip A13 Bionic mạnh mẽ với Neural Engine, camera trước 12MP Ultra Wide có tính năng Trung tâm màn hình, cùng với tất cả các khả năng của iPadOS 15.</li>
                            <li>iPad Air 4: iPad Air 4 là thiết bị gần giống với thiết kế của iPad Pro 11 inch (thế hệ 3) và có một số tính năng trước đây chỉ dành riêng cho dòng iPad Pro, chẳng hạn như hỗ trợ Bàn phím ảo. Tương thích với Apple Pencil thế hệ 2. Có sẵn 5 màu: Xám không gian, Bạc, Vàng hồng, Xanh lục và Xanh da trời.</li>
                            <li>Pad Air 5: iPad Air 5 trang bị chip M1 đột phá của Apple, mang đến hiệu suất ở một đẳng cấp mới gói gọn trong thiết kế mỏng nhẹ, toàn màn hình. Máy có màn hình Liquid Retina 10,9 inch sống động và có sẵn với 5 màu sản phẩm. Camera trước Ultra Wide với tính năng Trung tâm màn hình giúp giữ bạn luôn trong khung hình để tương tác trong những cuộc gọi video tốt hơn, và camera sau Wide giúp ghi lại những bức ảnh và video tuyệt đẹp.</li>
                            <li>iPad mini 6: iPad mini thế hệ 6 mang đến bản cập nhật lớn nhất từ trước đến nay cho iPad mini. Thiết bị có thiết kế viền mỏng với bốn màu tuyệt đẹp và màn hình Liquid Retina 8.3 inch lớn hơn, đẹp hơn với cùng một kích thước nhỏ gọn mà khách hàng yêu thích. Chip A15 Bionic cung cấp tốc độ xử lý cực nhanh.</li>
                            <li> iPad Pro M1: iPad Pro mang đến trải nghiệm iPad đỉnh cao. Chip M1 đột phá cung cấp hiệu suất ở tầm cao mới. Màn hình Liquid Retina XDR trên iPad Pro (12,9 inch) cung cấp Độ lệch tương phản cực cao cho trải nghiệm hình ảnh tuyệt vời hơn nữa. Và kiểu máy 11 inch có màn hình Liquid Retina trang bị các công nghệ tiên tiến.</li>
                        </ul>

                        {!showMore ? <div className='absolute left-0 bottom-0 cursor-pointer flex items-center justify-center bg-white h-[77px] w-full text-[#0066CC] text-[14px]' onClick={() => setShowMore(true)}>Xem thêm</div>
                            : <div className='absolute left-0 bottom-0 cursor-pointer flex items-center justify-center bg-white h-[77px] w-full text-[#0066CC] text-[14px]' onClick={() => setShowMore(false)}>Thu gọn</div>}
                    </div> :
                    (type === "Mac" ?
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
                        </div> :
                        (type === "Watch" ?
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
                            </div> :
                            (type === "Âm thanh" ?
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
                                </div> :
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
                                </div>))))}
        </div>
    )
}
