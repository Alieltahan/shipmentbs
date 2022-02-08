import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch() {
  const [data, setData] = useState(null);
  const [trackNum, setTrackNum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const APIUrl = `https://tracking.bosta.co/shipments/track/`;

  useEffect(() => {
    handleRequest(trackNum);
  }, [trackNum]);

  const handleRequest = (trackNum) => {
    // Guard Clause
    if (!trackNum) return;
    axios(`${APIUrl}${trackNum}`)
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
  return [data, loading, error, setTrackNum];
}
