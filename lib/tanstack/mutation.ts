'use client';

import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export type Value = {
  logisticsvalue: any;
  branchid: string;
  patientid: string;
  testid: string;
};
export const useBook = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: async ({
      branchid,
      logisticsvalue,
      patientid,
      testid,
    }: Value) => {
      const { data } = await axios.get(
        `https://247labapi.netpro.software/api.aspx?api=book&branchid=${branchid}&logisticsvalue=${logisticsvalue}&patientid=${patientid}&testid=${testid}`
      );
      console.log(data, 'mutation');
      return data;
    },
    onError: (err) => {
      console.log(err.message);
      toast({
        status: 'error',
        title: 'Could not make payment',
        description: 'Something went wrong, please try again',
        isClosable: true,
        duration: 3000,
        position: 'top-right',
      });
    },
    onSuccess: () => {
      toast({
        status: 'loading',
        title: 'Processing..',
        description: 'Please wait..',
        isClosable: true,
        duration: 3000,
        position: 'top-right',
      });
    },
  });
};
