import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const APIUrl = `https://tracking.bosta.co/shipments/track/`;

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = (trackNo) => {
    // Guard Clause
    if (!trackNo) return;
    axios(`${APIUrl}${trackNo}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { data, loading, error, handleRequest };
};

export default useFetch;
