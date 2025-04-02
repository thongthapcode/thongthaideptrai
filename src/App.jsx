import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import LoginModal from './components/LoginModal';
import ProductTabs from './components/ProductTabs';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <Header />
      <Slider />
      <LoginModal />
      <ProductTabs />
    </div>
  );
};

export default App;