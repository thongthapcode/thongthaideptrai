import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import LoginModal from './components/LoginModal';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Slider />
      <LoginModal />
    </div>
  );
};

export default App;