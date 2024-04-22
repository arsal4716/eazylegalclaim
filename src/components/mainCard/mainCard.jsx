import React from 'react';
import Card from '../card/card';
import '../styles/mainCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

const MainCard = () => {
  return (
    <>
    <div className='bg-main'>
      <h2 className="main-card-heading">Why Eazy Legal Claim?</h2>
      <div className="main-card-container">
      <Card icon={<i className="fas fa-heartbeat" />} heading="Tailored Coverage, Lower Premiums" description="We understand that every person has unique needs. By partnering with Eazy Legal Claim, you'll receive personalized coverage options tailored to your specific requirements, ensuring you're not paying for unnecessary coverage. This tailored approach allows you to save money by only paying for the protection you need" backgroundColor="white" color="black"/>
      <Card icon={<i className="fas fa-heartbeat" />} heading="Access to Leading Legal Quote Providers" description="Gain access to a network of top-rated legal quotes providers globally. Our partnerships with industry leaders ensure that you have access to competitive quotes" backgroundColor="white" color="blck"/>
      <Card icon={<i className="fas fa-heartbeat" />} heading="Hassle-Free and Transparent Process" description="Enjoy a hassle-free and transparent legal claim process with our user-friendly platform. From obtaining free quotes to legal claim, we streamline every step, providing clear and detailed information about coverage details, terms, and conditions." backgroundColor="white" color="black"/>
    </div>
    </div>
    </>

  );
}

export default MainCard;
