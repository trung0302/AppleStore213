import React from "react";

export default function Breadcrumb() {
  return (
    <div>
      <div className="px-[10px] py-[8px] bg-[#f5f5f7] pt-[20px] mb-[24px]">
        <div className="max-w-[1200px] m-auto w-full flex items-center">
          <a
            href="/"
            className="text-[14px] text-[#515154] hover:text-[#0066cc]"
          >
            Trang chủ
          </a>
          <div className="px-[5px] py-0">&gt;</div>
          <a href="/tin-tuc" className="text-[14px] text-[#515154]">
            tin-tuc
          </a>
        </div>
      </div>
    </div>
  );
}
