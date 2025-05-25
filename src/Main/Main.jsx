import React from 'react';
import Header from '../Pages/Header/Header';
import Home from '../Pages/Home/Home';

const Main = () => {
  return (
    <>
    <div className='z-50 relative'><Header></Header></div>
    <div className=''><Home></Home></div>
    </>
  );
};

export default Main;