import React from 'react';
import Card from '../card/card';
import '../styles/mainCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

const MainCard = () => {
  return (
    <div className="main-card-container">
      <Card icon={<i className="fas fa-car" />} heading="Road Traffic Accidents" description="If you are hit in a car or on road while driving or crossing road; you can claim for injuries" backgroundColor="yellow" color="white"/>
      <Card icon={<i className="fas fa-road" />} heading="Pedestrian Slips & Trips" description="Make a claim for benefits and avail compensation for injuries caused by slips due to pavement on roadsides." backgroundColor="black" color="white"/>
      <Card icon={<i className="fas fa-building" />} heading="Injuries at Work" description="You can hire a lawyer to claim money from your employer against work related injuries." backgroundColor="gray" color="white"/>
    </div>
  );
}

export default MainCard;
