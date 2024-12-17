// useApi.js
"use client"
import { axiosInstance } from '@/api/axios';

import { useState, useEffect } from 'react';

const useApi = (url: string, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(url, options);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);
  return { data, loading, error };
};
export default useApi;