import React, { useState } from 'react';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    
    { 
      name: '', 
      icon: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/10/0d/100d3018ffd23afe20324b164d0412cc.png',
      products: [
        { name: 'Laptop', image: '/images/laptop.png' },
        { name: 'Smartphone', image: '/images/smartphone.png' },
        { name: 'Headphones', image: '/images/headphones.png' },
        { name: 'Headphones', image: '/images/headphones.png' },
        { name: 'Headphones', image: '/images/headphones.png' },
        { name: 'Headphones', image: '/images/headphones.png' }

      ] 
    },
    { 
      name: '', 
      icon: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/a3/bb/a3bbf2f08eed862b8f6a9db2b228468f.png',
      products: [
        { name: 'T-Shirt', image: '/images/tshirt.png' },
        { name: 'Jeans', image: '/images/jeans.png' },
        { name: 'Jacket', image: '/images/jacket.png' }
      ] 
    },
    { 
      name: '', 
      icon: 'https://cdnv2.tgdd.vn/mwg-static/common/Campaign/30/6c/306cd59f1055e122e1186dfc60623763.png',
      products: [
        { name: 'Novel', image: '/images/novel.png' },
        { name: 'Biography', image: '/images/biography.png' },
        { name: 'Science Fiction', image: '/images/scifi.png' }
      ] 
    },
    { name: 'Home Appliances', products: ['Refrigerator', 'Microwave', 'Washing Machine'] },
    { name: 'Toys', products: ['Action Figures', 'Board Games', 'Puzzles'] },
    { name: 'Sports', products: ['Football', 'Tennis Racket', 'Basketball'] },
    { name: 'Beauty', products: ['Lipstick', 'Foundation', 'Perfume'] },
    { name: 'Automotive', products: ['Car Accessories', 'Motor Oil', 'Tires'] },
  ];

  return (
    
    <div className="w-full max-w-[1200px] mx-auto mt-10 bg-white">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
      Khuyến mãi Online
    </h2>
    <div className="flex justify-evenly border-b overflow-x-auto">
  {tabs.map((tab, index) => (
    <button
      key={index}
      className={`px-4 py-2 text-sm font-medium flex items-center gap-2 ${
        activeTab === index ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
      }`}
      onClick={() => setActiveTab(index)}
    >
      {tab.icon && (
        <img src={tab.icon} alt={tab.name} className="w-24 h-10" />
      )}
      {tab.name}
    </button>
  ))}
</div>
          
      <div className="mt-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {tabs[activeTab].products.map((product, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              {product.image && (
                <img src={product.image} alt={product.name} className="w-16 h-16 mb-2 object-contain" />
              )}
              <span>{product.name || product}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductTabs;
