import React from 'react';
import Cart from './Cart';
import './style.css';

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <image src='https://res.cloudinary.com/mabhi8251/image/upload/v1659591509/Gloitel-fitness/new-arrivals_dl0bku.png' />
              <h2>Cleaning Services</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
