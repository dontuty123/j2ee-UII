import React from "react";
import { formatCurrency } from "../../utils/utils.ts";

export default function ProductList() {
  return (
    <div className="container">
      <div className="mt-10">
        <div className="w-full flex  justify-between">
          <span className="text-3xl font-bold">Tất cả sản phẩm</span>
          <div className="border-b-2 w-[70%] mb-2 ml-2"></div>
        </div>
        <div className="text-gray-500 my-4">
          Những sản phẩm nổi tiếng với chất lượng hàng đầu được shop nhận về
          phục vụ cho khách hàng
        </div>
        <div className="flex items-center py-5">
          <div className="flex flex-col items-center cursor-pointer hover:text-[#338DBC] text-[#338DBC]">
            <img
              src="https://hinhanh.webvua.com/images/item_category/4752/resize/0732041000504.png"
              alt="apple img"
            />
            <span className="mt-2 ">Apple Watch</span>
          </div>
          <div className="flex flex-col items-center ml-14 cursor-pointer hover:text-[#338DBC]">
            <img
              src="https://hinhanh.webvua.com/images/item_category/4752/resize/3144002322163.png"
              alt="Xiaomi img"
            />
            <span className="mt-2">Xiaomi Watch</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 py-4 px-2">
          <a href="/product/a">
            <div className="overflow-hidden rounded-sm shadow-md border hover:translate-y-[-0.05rem] hover:shadow-md cursor-pointer">
              <div className="relative w-full pt-[100%] overflow-hidden">
                <img
                  src="https://hinhanh.webvua.com/images/item/4752/resize/2003002200703.jpg"
                  alt="apple watch black"
                  className="absolute top-0 left-0 h-full w-full bg-white object-cover transition-transform transform scale-100 hover:scale-125 duration-500"
                />
              </div>
              <div className="p-2">
                <div className="text-sm line-clamp-2 mb-5">
                  Apple Watch Series 6
                </div>
                <div className="justify-between px-1 flex truncate">
                  <div className="text-[#338DBC]">
                    <span className="text-xs">₫</span>
                    <span className="text-base">
                      {formatCurrency(10000000)}
                    </span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-xs mr-4">đã bán</span>
                    <span className="text-sm">2k</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="/product/a">
            <div className="overflow-hidden rounded-sm shadow-md border hover:translate-y-[-0.05rem] hover:shadow-md cursor-pointer">
              <div className="relative w-full pt-[100%] overflow-hidden">
                <img
                  src="https://hinhanh.webvua.com/images/item/4752/resize/2902022930990.jpg"
                  alt="apple watch black"
                  className="absolute top-0 left-0 h-full w-full bg-white object-cover transition-transform transform scale-100 hover:scale-125 duration-500"
                />
              </div>
              <div className="p-2">
                <div className="text-sm line-clamp-2 mb-5">
                  Apple Watch Series 6
                </div>
                <div className="justify-between px-1 flex truncate">
                  <div className="text-[#338DBC]">
                    <span className="text-xs">₫</span>
                    <span className="text-base">
                      {formatCurrency(11000000)}
                    </span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-xs mr-4">đã bán</span>
                    <span className="text-sm">2k</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="/product/a">
            <div className="overflow-hidden rounded-sm shadow-md border hover:translate-y-[-0.05rem] hover:shadow-md cursor-pointer">
              <div className="relative w-full pt-[100%] overflow-hidden">
                <img
                  src="https://hinhanh.webvua.com/images/item/4752/resize/3203355828528.jpg"
                  alt="apple watch black"
                  className="absolute top-0 left-0 h-full w-full bg-white object-cover transition-transform transform scale-100 hover:scale-125 duration-500"
                />
              </div>
              <div className="p-2">
                <div className="text-sm line-clamp-2 mb-5">
                  Apple Watch Series 5
                </div>
                <div className="justify-between px-1 flex truncate">
                  <div className="text-[#338DBC]">
                    <span className="text-base">Liên hệ</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-xs mr-4">đã bán</span>
                    <span className="text-sm">2k</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="/product/a">
            <div className="overflow-hidden rounded-sm shadow-md border hover:translate-y-[-0.05rem] hover:shadow-md cursor-pointer">
              <div className="relative w-full pt-[100%] overflow-hidden">
                <img
                  src="https://hinhanh.webvua.com/images/item/4752/resize/0732072007080.jpg"
                  alt="apple watch black"
                  className="absolute top-0 left-0 h-full w-full bg-white object-cover transition-transform transform scale-100 hover:scale-125 duration-500"
                />
              </div>
              <div className="p-2">
                <div className="text-sm line-clamp-2 mb-5">
                  Apple Watch Series 4
                </div>
                <div className="justify-between px-1 flex truncate">
                  <div className="text-[#338DBC]">
                    <span className="text-xs">₫</span>
                    <span className="text-base">{formatCurrency(7700000)}</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-xs mr-4">đã bán</span>
                    <span className="text-sm">2k</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="/product/a">
            <div className="overflow-hidden rounded-sm shadow-md border hover:translate-y-[-0.05rem] hover:shadow-md cursor-pointer">
              <div className="relative w-full pt-[100%] overflow-hidden">
                <img
                  src="https://hinhanh.webvua.com/images/item/4752/resize/5205057507272.jpg"
                  alt="apple watch black"
                  className="absolute top-0 left-0 h-full w-full bg-white object-cover transition-transform transform scale-100 hover:scale-125 duration-500"
                />
              </div>
              <div className="p-2">
                <div className="text-sm line-clamp-2 mb-5">
                  Apple Watch Series 3 38mm
                </div>
                <div className="justify-between px-1 flex truncate">
                  <div className="text-[#338DBC]">
                    <span className="text-base">Liên hệ</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-xs mr-4">đã bán</span>
                    <span className="text-sm">2k</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="/product/a">
            <div className="overflow-hidden rounded-sm shadow-md border hover:translate-y-[-0.05rem] hover:shadow-md cursor-pointer">
              <div className="relative w-full pt-[100%] overflow-hidden">
                <img
                  src="https://hinhanh.webvua.com/images/item/4752/resize/5283302102222.jpg"
                  alt="apple watch black"
                  className="absolute top-0 left-0 h-full w-full bg-white object-cover transition-transform transform scale-100 hover:scale-125 duration-500"
                />
              </div>
              <div className="p-2">
                <div className="text-sm line-clamp-2 mb-5">
                  Apple Watch Series 5
                </div>
                <div className="justify-between px-1 flex truncate">
                  <div className="text-[#338DBC]">
                    <span className="text-xs">₫</span>
                    <span className="text-base">{formatCurrency(9000000)}</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-xs mr-4">đã bán</span>
                    <span className="text-sm">2k</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="/product/a">
            <div className="overflow-hidden rounded-sm shadow-md border hover:translate-y-[-0.05rem] hover:shadow-md cursor-pointer">
              <div className="relative w-full pt-[100%] overflow-hidden">
                <img
                  src="https://hinhanh.webvua.com/images/item/4752/resize/3382003320000.jpg"
                  alt="apple watch black"
                  className="absolute top-0 left-0 h-full w-full bg-white object-cover transition-transform transform scale-100 hover:scale-125 duration-500"
                />
              </div>
              <div className="p-2">
                <div className="text-sm line-clamp-2 mb-5">
                  Apple Watch Series 4
                </div>
                <div className="justify-between px-1 flex truncate">
                  <div className="text-[#338DBC]">
                    <span className="text-xs">₫</span>
                    <span className="text-base">{formatCurrency(7700000)}</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-xs mr-4">đã bán</span>
                    <span className="text-sm">2k</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="/product/a">
            <div className="overflow-hidden rounded-sm shadow-md border hover:translate-y-[-0.05rem] hover:shadow-md cursor-pointer">
              <div className="relative w-full pt-[100%] overflow-hidden">
                <img
                  src="https://hinhanh.webvua.com/images/item/4752/resize/2020800538830.jpg"
                  alt="apple watch black"
                  className="absolute top-0 left-0 h-full w-full bg-white object-cover transition-transform transform scale-100 hover:scale-125 duration-500"
                />
              </div>
              <div className="p-2">
                <div className="text-sm line-clamp-2 mb-5">
                  Apple Watch Series 3
                </div>
                <div className="justify-between px-1 flex truncate">
                  <div className="text-[#338DBC]">
                    <span className="text-xs">₫</span>
                    <span className="text-base">{formatCurrency(5500000)}</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-xs mr-4">đã bán</span>
                    <span className="text-sm">2k</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
