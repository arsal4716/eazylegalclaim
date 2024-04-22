// Main.jsx
import React from 'react';
import MainCard from '../mainCard/mainCard';
import Form from '../form/form';
import Header from '../header/header';
import Banner from '../banner/banner';
import MainCard2 from '../mainCard2/mainCard2';
import ImageText from '../textImg/textImg';
import img1 from '../../assets/Group-8089-1.webp';
import img2 from '../../assets/Group-8089-2.webp';
import img3 from '../../assets/Group-8089.webp';
import Footer from '../footer/footer';

const Main = () => {
  return (
      <>
    <Header />
      <Form />
      {/* <Banner /> */}
      {/* <MainCard2 /> */}
      <ImageText imageUrl={img1} text="Injuries at Work"
      heading= "“Protect Your Livelihood: Secure Compensation for Work-Related Injuries”" className="text-left" />
      <ImageText imageUrl={img2} text="Pedestrian Slips & Trips"
       heading="“Find Your Footing: Win Compensation for Slip and Trip Injuries”" className="text-right" />
      <ImageText imageUrl={img3} text="Submit Road Traffic Accidents"
      heading="“Claim Your Right to Recovery: Compensation for Roadside Injuries”" className="text-left" />
      <MainCard />
      <Footer/>
    </>
  );
};

export default Main;
