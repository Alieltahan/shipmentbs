import ShipmentHeader from '../components/ShipmentHeader/ShipmentHeader';
import ShipmentProgressBar from '../components/ShipmentProgress/ShipmentProgressBar';
import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';

const ShipmentBody = () => {
  const [inputTrackNum, setInputTrackNum] = useState(null);

  const handleTrackNum = (num) => {
    console.log(num);
    setInputTrackNum(num);
  };
  return (
    <>
      <Navbar handleTrackNum={handleTrackNum} />
      <ShipmentHeader />
      <ShipmentProgressBar />
    </>
  );
};

export default ShipmentBody;
