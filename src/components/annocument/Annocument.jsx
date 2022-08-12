import React from 'react';

const Annocument = () => {
  const mystyle = {
    width: '30%',
    height: '340px',
  };
  const mystyle1 = {
    width: '68%',
    height: '340px',
  };
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <image
              src='https://res.cloudinary.com/mabhi8251/image/upload/v1659592019/Gloitel-fitness/cpu_dbqb15.png'
              width='100%'
              height='100%'
            />
          </div>
          <div className='img' style={mystyle1}>
            <image
              src='https://res.cloudinary.com/mabhi8251/image/upload/v1659592019/Gloitel-fitness/cpu_dbqb15.png'
              width='100%'
              height='100%'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annocument;
