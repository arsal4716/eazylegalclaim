import React from 'react';
import Card2 from '../card2/Card2';

const MainCard2 = () => {
  return (
    <div style={{ display: 'flex' }} className='mainCard2'>
      <Card2 icon="fa-medal" backgroundColor="yellow" iconColor="white">First Card</Card2>
      <Card2 icon="fa-globe" backgroundColor="yellow" iconColor="white">Second Card</Card2>
      <Card2 icon="fa-trophy" backgroundColor="yellow" iconColor="white">Third Card</Card2>
    </div>
  );
}

export default MainCard2;
