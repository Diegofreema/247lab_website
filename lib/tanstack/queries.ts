'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useStates = () => {
  const getStates = async () => {
    try {
      const { data } = await axios.get(
        'https://247labapi.netpro.software/api.aspx?api=getstates'
      );
      return data;
    } catch (error) {
      console.log('Error fetching states:', error);
      return [];
    }
  };
  return useQuery({ queryKey: ['states'], queryFn: getStates });
};
