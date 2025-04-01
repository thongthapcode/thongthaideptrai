import React from 'react';

const Header = () => {
  return (
    <header className="bg-yellow-400 p-2 fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
        <div className="logo flex-shrink-0 hidden sm:block">
          <a href="#"><img src="./images/logo.png" alt="Thegioididong" className="h-12" /></a>
        </div>
        <div className="relative flex-grow max-w-[415px] ml-[-75px] hidden sm:block">
          <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"></i>
          <input type="text" className="w-full h-10 pl-12 pr-4 rounded-full outline-none text-base" placeholder="Bạn tìm gì..." />
        </div>
        <nav className="flex items-center gap-6 flex-shrink-0 hidden ml-[-40px] sm:flex">
          <button id="login-btn" className="text-sm flex items-center gap-2 cursor-pointer">
            <i className="fa-regular fa-user"></i> Đăng Nhập
          </button>
          <button className="relative flex items-center gap-2 cursor-pointer">
            <i className="fas fa-shopping-cart text-lg"></i> Giỏ hàng
            <span id="cart-badge" className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm hidden">0</span>
          </button>
          <div className="bg-yellow-300 px-[140px] py-2 rounded-full flex items-center h-10 text-sm cursor-pointer relative">
            <i className="absolute left-[3px] fas fa-map-marker-alt text-lg"></i>
            <span className="absolute left-[20px]">Hồ Chí Minh</span>
            <i className="absolute right-[20px] fas fa-angle-down text-lg"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;