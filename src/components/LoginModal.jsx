import React, { useState } from 'react';

const LoginModal = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loginMessage, setLoginMessage] = useState('');
  const validPhones = ["0923111071", "0976471361", "091235678"];

  const handleLogin = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value.trim();
    if (validPhones.includes(phone)) {
      setLoginMessage('');
      alert("Đăng nhập thành công!");
      setCurrentUser(phone);
      document.getElementById("login-modal").classList.add("hidden");
    } else {
      setLoginMessage("Số điện thoại không hợp lệ");
    }
  };

  return (
    <div id="login-modal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-awesome mb-4 text-center">Đăng nhập</h2>
        <form id="login-form" className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">Số điện thoại</label>
            <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Đăng nhập</button>
        </form>
        <p id="login-message" className="mt-4 text-center text-red-500">{loginMessage}</p>
        <button id="close-login" className="mt-4 w-full bg-gray-300 text-black py-2 rounded hover:bg-gray-400" onClick={() => document.getElementById("login-modal").classList.add("hidden")}>Đóng</button>
      </div>
    </div>
  );
};

export default LoginModal;