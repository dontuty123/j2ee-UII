import React from "react";

export default function CompleteOrder() {
  return (
    <div className="container flex pt-10">
      <form className="w-3/5">
        <div className="text-lg my-4">Thông tin giao hàng</div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#338DBC] peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#338DBC] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Họ và tên
          </label>
        </div>
        <div class="grid md:grid-cols-3 md:gap-6">
          <div class="relative col-span-2 z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#338DBC] peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#338DBC] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#338DBC] peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#338DBC] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Số điện thoại
            </label>
          </div>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#338DBC] peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#338DBC] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Địa chỉ
          </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Tỉnh thành</option>
              <option value="hcm">Hồ Chí Minh</option>
              <option value="hn">Hà Nội</option>
              <option value="dn">Đà Nẵng</option>
              <option value="cm">Cà mau</option>
            </select>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected>Quận huyện</option>
              <option value="q1">Quận 1</option>
              <option value="q2">Quận 2</option>
              <option value="q3">Quận 3</option>
              <option value="q4">Quận 4</option>
              <option value="q5">Quận 5</option>
              <option value="q6">Quận 6</option>
              <option value="q7">Quận 7</option>
              <option value="q8">Quận 8</option>
            </select>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Phường xã</option>
              <option value="p1">Phường 1</option>
              <option value="p2">Phường 2</option>
              <option value="p3">Phường 3</option>
              <option value="p4">Phường 4</option>
              <option value="p5">Phường 5</option>
              <option value="p6">Phường 6</option>
              <option value="p7">Phường 7</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <a href="/cart/a">
            <div className="text-[#338dbc] text-md underline cursor-pointer">
              Giỏ hàng
            </div>
          </a>
          <button
            type="submit"
            class="w-full text-white bg-[#338DBC] hover:bg-[#338DBC]/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-24 py-2.5 text-center "
          >
            Hoàn Tất Đơn Hàng
          </button>
        </div>
      </form>
      <div className="border mx-5" />
      <div className="gap-4 w-2/5">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://hinhanh.webvua.com/images/item/4752/resize/3203355828528.jpg"
                alt="payment img"
                className="w-20 h-20 rounded-md shadow-edit border"
              />
              <div className="absolute h-6 w-6 right-[-10px] top-[-10px] bg-slate-400 hover:bg-slate-500 rounded-full text-white font-semibold text-center">
                2
              </div>
            </div>
            <span>Apple Watch Series 5</span>
          </div>
          <div className="text-gray-400">0₫</div>
        </div>
        <div className="border my-5" />
        <div className="flex gap-4 items-center justify-between">
          <input
            type="text"
            className="rounded-md h-[39px] border focus-within:outline-[#338dbc] flex-grow px-3"
            placeholder="Mã giảm giá"
          />
          <button className="px-10 py-2 rounded-md bg-[#338dbc] text-white">
            Sử dụng
          </button>
        </div>
        <div className="border my-5" />
        <div>
          <div className="flex justify-between items-center text-gray-600">
            <div>Tạm tính</div>
            <div>0₫</div>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <div>Phí vận chuyển</div>
            <div>0₫</div>
          </div>
        </div>
        <div className="border my-5" />
        <div className="flex justify-between items-center">
          <div className="text-xl">Tổng cộng</div>
          <div>VND 0₫</div>
        </div>
      </div>
    </div>
  );
}
