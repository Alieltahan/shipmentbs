import ShipmentHeader from '../components/ShipmentHeader/ShipmentHeader';
import ShipmentProgressBar from '../components/ShipmentProgress/ShipmentProgressBar';
import Navbar from '../components/Navbar/Navbar';
import useFetch from '../components/utils/useFetch';
import ShipmentDetails from '../components/ShipmentDetails/ShipmentDetails';

const ShipmentBody = () => {
  const [data, error, loading, setTrackNum] = useFetch();

  const handleTrackNum = (trackNo) => {
    setTrackNum(trackNo);
  };
  // #TODO REMOVE
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
          <ShipmentDetails TransitEvents={data.TransitEvents} />
        </>
      )}
    </>
  );
};

export default ShipmentBody;
