import React from "react";

export default function Cart() {
  return (
    <div className="container flex pt-5 text-sm">
      <div className="px-3 w-2/3">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-2xl">Giỏ hàng của bạn</div>
          <div className="text-md">Bạn đang có 1 sản phẩm trong giỏ hàng</div>
        </div>
        <div className="border-b border-gray-300 my-8" />
        <div className="border rounded-md shadow border-gray-300 flex justify-between px-3 py-5">
          <div className="flex">
            <div className="h-7 w-7 bg-gray-500 flex px-1 py-1.5 rounded-full text-xs justify-center text-white font-semibold cursor-pointer ">
              Xóa
            </div>
            <div className="w-24 rounded-sm shadow-md hover:translate-y-[-0.05rem] hover:shadow-md cursor-pointer mx-3">
              <div className="relative w-full pt-[90%] overflow-hidden">
                <img
                  src="https://hinhanh.webvua.com/images/item/4752/resize/3203355828528.jpg"
                  alt="dsdsd"
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform transform scale-100 hover:scale-125 duration-500"
                />
              </div>
            </div>
            <div className="ml-4">
              <div className="font-semibold cursor-pointer">
                Apple Watch Series 5
              </div>
              <div className="font-semibold text-gray-400 mt-4">0 ₫</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold">0₫</div>
            <div className="mt-5 flex justify-end">
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
          </div>
        </div>
      </div>
      <div className="w-1/3 px-3">
        <div className="border border-gray-300/80 p-4">
          <div className="py-4 border-b border-gray-300/80 flex justify-between">
            <div className="font-semibold">Tổng tiền: </div>
            <div className="font-bold text-xl text-[#338DBC]">0₫</div>
          </div>

          <div className="flex items-center py-3 gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 15 ngày</div>
          </div>
          <div className="flex items-center pb-3 gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</div>
          </div>
          <a href="/payment/a">
            <button className="w-full bg-[#338DBC] text-white font-bold py-3 text-center capitalize mt-3 hover:bg-[#338DBC]/80">
              thanh toán
            </button>
          </a>
        </div>
        <div className="rounded-md p-4 border border-[#bce8f1] bg-[#d9edf7] mt-4">
          <div className="font-bold">Chính sách mua hàng:</div>
          <div className="mt-3">
            Hiện chúng tôi đang áp dụng giao hàng trên toàn quốc
          </div>
        </div>
      </div>
    </div>
  );
}
