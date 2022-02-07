import ShipmentHeader from '../components/ShipmentHeader/ShipmentHeader';
import ShipmentProgressBar from '../components/ShipmentProgress/ShipmentProgressBar';
import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
import useFetch from '../components/utils/useFetch';

const ShipmentBody = () => {
  const { data, error, loading, handleRequest } = useFetch();

  const [inputTrackNum, setInputTrackNum] = useState(null);

  const handleTrackNum = (trackNo) => {
    setInputTrackNum(trackNo);
    if (inputTrackNum) {
      handleRequest(inputTrackNum);
    }
  };

  if (data) {
    console.log(data);
  }

  return (
    <>
      <Navbar handleTrackNum={handleTrackNum} />
      {data && (
        <>
          {' '}
          <ShipmentHeader data={data} />
          <ShipmentProgressBar TransitEvents={data.TransitEvents} />
        </>
      )}
    </>
  );
};

export default ShipmentBody;
