import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleRequest();
  }, []);
  console.log(data, `DATA`);

  const handleRequest = (trackNo) => {
    console.log(trackNo);
    // axios(`https://tracking.bosta.co/shipments/track/${9442984}`)
    //   .then((response) => {
    //     setData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data: ', error);
    //     setError(error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };
  return { data, loading, error, handleRequest };
};

export default useFetch;
