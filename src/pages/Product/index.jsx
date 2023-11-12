import React from "react";
import { formatCurrency } from "../../utils/utils.ts";

export default function Product() {
  return (
    <div className="bg-gray-100 py-6">
      <div className="bg-white p-4">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 mb-7">
            <div className="col-span-5">
              <div className="relative pt-[100%] w-full shadow">
                <img
                  className="absolute top-0 left-0 w-full h-full bg-white object-cover"
                  src="https://hinhanh.webvua.com/images/item/4752/resize/3203355828528.jpg"
                  alt="product detail img"
                />
              </div>
            </div>
            <div className="col-span-7 pl-4">
              <div className="text-black text-[24px] mt-2">
                Apple Watch Series 5
              </div>
              <div className="flex mt-2 justify-between px-5">
                <span className="text-gray-500 text-base">1k đã bán</span>
                <span className="text-gray-400 text-sm">Tố cáo</span>
              </div>
              <div className="px-5 py-4 text-[#338dbc]">
                <span className="text-[24px]">₫</span>
                <span className="text-[32px]">{formatCurrency(50000000)}</span>
              </div>
              <div className="pt-4 grid grid-cols-8 px-5 text-gray-600">
                <span className="col-span-2 text-base">Số lượng</span>
                <div className="col-span-6 flex">
                  <div className="flex">
                    {/* INPUT NUMBER */}
                    <button className="bg-white border px-[6px] py-[1px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-3 h-6 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      className="border border-l-0 border-r-0 text-center w-[40%] focus:border-transparent"
                      placeholder="1"
                    />
                    <button className="bg-white border px-[6px] py-[1px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-3 h-6 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="col-span-1 text-sm">100 sản phẩm có sẵn</div>
                </div>
              </div>
              <div className="px-5 py-4 flex mt-8">
                <button className="border border-[#338dbc] bg-[#338dbc]/20 flex p-3 rounded-sm cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.4"
                    stroke="currentColor"
                    className="w-6 h-6 text-[#338dbc] mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <span className="text-[#338dbc]">Thêm vào giỏ hàng</span>
                </button>
                <a href="/cart/a">
                  <button className="bg-[#338dbc] text-white px-10 py-3 ml-5 cursor-pointer">
                    Mua ngay
                  </button>
                </a>
              </div>
            </div>
          </div>
          <span className="text-[24px] mb-7">Thông tin chi tiết</span>
          <div className="mt-10 bg-white text-sm w-[80%]">
            Màn hình OLED luôn hiển thị Màn hình hiển thị sắc nét, màu sắc chân
            thực ngay cả dưới trời nắng gắt. Tính năng luôn bật sáng màn hình
            xem giờ tiện lợi ngay cả khi đang lái xe. Bên cạnh đó, màn hình sẽ
            tự động giảm độ sáng khi không cần thiết để tăng tối đa thời lượng
            pin. Định vị chính xác bằng GPS và la bàn Định vị GPS định vị với độ
            chính xác cao vị trí của bạn, giúp dễ dàng tính toán lộ trình luyện
            tập. Bên cạnh đó, đồng hồ thông minh Apple Watch S5 còn có la bàn từ
            tính giúp xác định phương hướng ở những nơi không định vị được bằng
            GPS tính năng này giúp ích cho những ai có sở thích đi leo núi, dã
            ngoại trong rừng,...
          </div>
        </div>
      </div>
    </div>
  );
}
