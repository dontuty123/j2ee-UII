import React from "react";

export default function Footer() {
  return (
    <div className="mt-20">
      <img
        src="https://hinhanh.webvua.com/images/adv/4752/resize/0000010000158.jpg"
        alt="footer bg img"
        className="absolute"
      />
      <div className="relative  text-white flex justify-between gap-5 container py-14">
        <div className="w-1/3 ">
          <div className="text-xl font-semibold">TỰ SOẠN THẢO 1</div>
          <div className="text-md mt-5">TỰ SOẠN THẢO 1</div>
          <div className="text-md mt-5">TỰ SOẠN THẢO 1</div>
          <div className="text-md mt-5">TỰ SOẠN THẢO 1</div>
        </div>
        <div className="w-1/3 ">
          <div className="text-xl font-semibold">DELTA WATCH</div>
          <div className="text-md mt-5">Địa chỉ : Quận Tân Bình, HCM.</div>
          <div className="text-md mt-5">Điện thoại : 09xxxxxxxx</div>
          <div className="text-md mt-5">Email : xxxxxxxxxx@gmail.com</div>
        </div>
        <div className="w-1/3 ">
          <div className="text-xl font-semibold">THEO DÕI CHÚNG TÔI</div>
          <div className="text-md mt-5">Hehe</div>
          <div className="text-md mt-5">Hehe</div>
          <div className="text-md mt-5">Hehe</div>
        </div>
      </div>
    </div>
  );
}
