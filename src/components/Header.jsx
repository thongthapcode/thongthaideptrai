import React from 'react';

const Header = () => {
  return (
    <header className="bg-yellow-400 p-2 fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
        <div className="logo flex-shrink-0 hidden sm:block">
          <a href="#"><img src="/images/logo.png" alt="Thegioididong" className="h-12" /></a>
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
        
        <div className=" flex items-center sm:hidden w-full gap-2 px-2">
          
          <div className="logo-mobi ml-0 flex-shrink-0 flex top-1 left-1">
            <a href="#"><img src="./images/logo2.png" alt="thegioididong" className="h-8 max-w[120px] object-contain" /></a>
          </div>
          <div className="bg-yellow-300 px-6 py-1 w-[270px] h-8 rounded-full flex items-center justify-start gap-1 text-xs cursor-pointer">
            <i className="fas fa-map-marker-alt text-sm"></i>
            <span className="text-xs pl-0"> Hồ Chí Minh</span>
            <i className="fas fa-angle-down text-sm ml-auto"></i>
          </div>
          <button id="login-btn" class="flex items-center space-x-2 text-xs cursor-pointer whitespace-nowrap bg-yellow-300 px-1 py-1 rounded-full h-8">
           <i className="fas fa-user text-xs"></i> 
           <span>Đăng nhập</span>
           </button>
        </div>

      </div>
      <div className="relative w-[380px] mt-2 px-2 sm:hidden">
  {/* thanh tìm kiếm mobile */}
  <input
    type="text"
    className="w-full h-10 pl-14 pr-12 rounded-lg outline-none text-base bg-gray-100"
    placeholder="bạn tìm gì.."
  />
  {/* nút menu */}
  <button
    id="menu-btn"
    className="absolute left-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center text-gray-600 px-2 py-1 rounded-md bg-gray-200"
    style={{ height: '36px', width: '36px' }} // Đảm bảo kích thước nút phù hợp
  >
    <i className="fas fa-bars text-sm"></i>
    <span className="text-xs mt-0.5">Menu</span> {/* Điều chỉnh khoảng cách chữ */}
  </button>
  {/* giỏ hàng mobile */}
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-4 text-gray-600 bg-gray-200"
    style={{ height: '36px', width: '36px' }} // Đảm bảo kích thước nút phù hợp
  >
    <i className="fas fa-shopping-cart text-lg"></i>
    <span
      id="cart-badge"
      className="bg-red-500 text-white rounded-full px-1 text-xs"
    >
    </span>
  </button>
</div>


    </header>




    
  );
};

export default Header;