import React from "react";

export default function Header() {
  return (
    <header className="border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]">
      <div className="flex justify-end">
        <div className="flex items-center pt-1 pb-2 cursor-pointer ml-6">
          <div className="w-6 h-6 mr-2 flex-shrink-0">
            <img
              src="https://pyxis.nymag.com/v1/imgs/51b/28a/622789406b8850203e2637d657d5a0e0c3-avatar-rerelease.1x.rsquare.w1400.jpg"
              alt="avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>Hello there,</div>
          <a href="/login">
            <div className="hover:text-gray-500 text-[#338DBC] font-semibold underline ml-5">
              Log out
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-2 max-lg:gap-y-6">
        <a href="/">
          <img
            src="https://hinhanh.webvua.com/images/logo/4752/resize/2035342283933.png"
            alt="logo"
            className="w-24"
          />
        </a>
        <button className="lg:hidden ml-auto">
          <svg
            className="w-7 h-7"
            fill="#000"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ul className="flex lg:ml-14 lg:space-x-5 max-lg:space-y-2 max-lg:block max-lg:w-full">
          <li className="max-lg:border-b max-lg:py-2 px-3">
            <a
              href="/"
              className="lg:hover:text-[#338DBC] text-[#338DBC] block font-semibold text-[15px]"
            >
              TRANG CHỦ
            </a>
          </li>
          <li className="max-lg:border-b max-lg:py-2 px-3">
            <a
              href="/product-list"
              className="lg:hover:text-[#338DBC] text-gray-500 block font-semibold text-[15px]"
            >
              SẢN PHẨM
            </a>
          </li>
        </ul>
        <div className="flex items-end lg:ml-auto max-lg:w-full">
          <div className="flex xl:w-80 max-xl:w-full bg-gray-100 px-6 py-3 rounded outline outline-transparent focus-within:outline-[#338dbc]">
            <input
              type="text"
              placeholder="Search something..."
              className="w-full text-sm bg-transparent rounded outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="cursor-pointer fill-gray-400"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
            </svg>
          </div>
          <div className="ml-5 cursor-pointer ">
            <a href="/cart/a" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <div className="absolute top-[-15px] left-[-10px] rounded-full bg-[#338dbc] px-[9px] py-[1px]  right-13 text-white">
                1
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
