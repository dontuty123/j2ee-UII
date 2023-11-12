import React from "react";

import alo from "../../assets/images/zyro-image.png";

export default function index() {
  return (
    <div className="h-[100vh] flex bg-gray-200 w-full flex-col md:flex-row">
      <div className="md:w-3/5 flex items-center justify-center">
        <div className="character waving">
          <img
            src={alo}
            alt="Character"
            className="md:max-w-lg max-w-[170px]"
          />
        </div>
      </div>

      <div className="md:w-2/5 flex items-center justify-center">
        <div className="max-w-md w-full p-6 space-y-8 bg-white rounded-lg shadow-md shadow-blue-200">
          <form className="space-y-6">
            <div className="flex items-center justify-center bg-gray-50">
              <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <div>
                  <h2 className="mt-6 text-2xl md:text-3xl font-extrabold text-gray-900">
                    Đăng nhập vào tài khoản của bạn
                  </h2>
                </div>
                <form className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mật khẩu
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 mb-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Đăng nhập
                    </button>
                  </div>
                  <span className="text-gray-500 font-semibold text-sm">
                    Chưa có tài khoản?
                  </span>

                  <a href="/signup">
                    <span className="text-blue-600 underline font-semibold text-sm cursor-pointer ml-1 dark:text-blue-400 dark:hover:text-blue-600">
                      Đăng ký
                    </span>
                  </a>
                </form>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
