import React from 'react';

const Categories = () => {
  const data = [
    {
      cateImg: 'https://res.cloudinary.com/mabhi8251/image/upload/v1659591199/Gloitel-fitness/car-repair_bhxabv.png',
      cateName: 'AC-Repair',
    },
    {
      cateImg: 'https://res.cloudinary.com/mabhi8251/image/upload/v1659591199/Gloitel-fitness/car-repair_bhxabv.png',
      cateName: 'Air-Cooler Repair',
    },
    {
      cateImg: 'https://res.cloudinary.com/mabhi8251/image/upload/v1659591199/Gloitel-fitness/car-repair_bhxabv.png',
      cateName: 'Gas-Stove Reapir',
    },
    {
      cateImg: 'https://res.cloudinary.com/mabhi8251/image/upload/v1659591199/Gloitel-fitness/car-repair_bhxabv.png',
      cateName: 'Geyser Repair',
    },
    {
      cateImg: 'https://res.cloudinary.com/mabhi8251/image/upload/v1659591199/Gloitel-fitness/car-repair_bhxabv.png',
      cateName: 'Inverter Repair',
    },
    {
      cateImg: 'https://res.cloudinary.com/mabhi8251/image/upload/v1659591199/Gloitel-fitness/car-repair_bhxabv.png',
      cateName: 'Kitchan-chimny Repair',
    },
    {
      cateImg: 'https://res.cloudinary.com/mabhi8251/image/upload/v1659591199/Gloitel-fitness/car-repair_bhxabv.png',
      cateName: 'Microwave-oven Repair',
    },
    {
      cateImg: 'https://res.cloudinary.com/mabhi8251/image/upload/v1659591199/Gloitel-fitness/car-repair_bhxabv.png',
      cateName: 'Refrigarator Repair',
    },
    {
      cateImg: 'https://res.cloudinary.com/mabhi8251/image/upload/v1659591199/Gloitel-fitness/car-repair_bhxabv.png',
      cateName: 'TV Repair',
    },
    {
      cateImg: 'https://res.cloudinary.com/mabhi8251/image/upload/v1659591199/Gloitel-fitness/car-repair_bhxabv.png',
      cateName: 'washing-Machine Repair',
    },
    {
      cateImg: 'https://res.cloudinary.com/mabhi8251/image/upload/v1659591199/Gloitel-fitness/car-repair_bhxabv.png',
      cateName: 'water-cooler Repair',
    },
  ];

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
