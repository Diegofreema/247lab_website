'use client';
import { Test, UserType } from '@/utils/types';
import {
  Box,
  Button,
  Divider,
  Flex,
  SimpleGrid,
  Switch,
  Text,
  useToast,
} from '@chakra-ui/react';
import { PlainCard } from './PlainCard';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { colors } from '@/constants';
import { usePaystackPayment } from 'react-paystack';
import { useBook } from '@/lib/tanstack/mutation';
import axios from 'axios';

type Props = {
  testPrices: Test[];
  patientId: string;
  branchId: string;
  profile: UserType;
};

export const PayComponent = ({
  testPrices,
  branchId,
  patientId,
  profile,
}: Props): JSX.Element => {
  return (
    <SimpleGrid gap={7} mt={10}>
      {testPrices.map((test) => (
        <PayItem
          key={test.test}
          test={test}
          patientId={patientId}
          branchId={branchId}
          profile={profile}
        />
      ))}
    </SimpleGrid>
  );
};

const PayItem = ({
  test,
  patientId,
  branchId,
  profile,
}: {
  test: Test;
  patientId: string;
  branchId: string;
  profile: UserType;
}) => {
  const { data, isPending, mutate } = useBook();
  console.log('🚀 ~ data:', data);
  const toast = useToast();
  const testName = test?.test.split('- N')[0];

  const [selected, setSelected] = useState(false);

  const onToggleHomeService = () => setSelected(!selected);

  const basePrice = +test?.cost;
  const homeServiceFee = test?.logistics ? +test.logistics : 0;

  const finalPrice = useMemo(() => {
    if (selected) {
      return basePrice + homeServiceFee;
    } else {
      return basePrice;
    }
  }, [selected, basePrice, homeServiceFee]);
  const logisticValue = useMemo(() => {
    if (selected) {
      return homeServiceFee;
    } else {
      return 0;
    }
  }, [selected, homeServiceFee]);
  const totalPrice = Number(data?.servicecost) + Number(data?.logistics);
  const config = {
    reference: data?.ref,
    email: profile?.email,
    amount: totalPrice * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_ed76c81770ed30bfd8734bd6086aa6e2e2057088',
    // channels={[
    //       'card',
    //       'bank',
    //       'ussd',
    //       'mobile_money',
    //       'qr',
    //       'bank_transfer',
    //     ]}
  };
  const onSuccess = useCallback(async () => {
    await axios.post(
      `https://247laboratory.net/checkout.aspx?zxc=${data?.ref}`
    );
    toast({
      status: 'success',
      title: 'Success',
      description: 'Your booking has been finalised',
      position: 'top-right',
    });
  }, [data?.ref, toast]);

  // you can call this function anything
  const onClose = useCallback(() => {
    toast({
      status: 'warning',
      title: 'Payment was canceled',
      description: 'You cancelled the payment',
      position: 'top-right',
    });
  }, [toast]);
  const initializePayment = usePaystackPayment(config);
  useEffect(() => {
    if (data?.ref) {
      initializePayment(onSuccess, onClose);
    }
  }, [data?.ref, initializePayment, onClose, onSuccess]);
  return (
    <PlainCard>
      <TestItem subTitle="Test" title={testName} />
      <TestItem subTitle="Base Price" title={'₦' + basePrice} />
      {test?.logistics && (
        <TestItem subTitle="Home Service Fee" title={'₦' + homeServiceFee} />
      )}
      <Flex justifyContent="space-between" alignItems="center">
        <Text textColor={'black'} fontFamily={'var(--font-rubik)'}>
          Accept home service
        </Text>
        <Switch
          colorScheme="green"
          isChecked={selected}
          onChange={onToggleHomeService}
        />
      </Flex>
      <Divider my={5} />
      <TestItem title={`₦${finalPrice}`} subTitle={'Total Price'} />
      <Box mt={3}>
        <Button
          bg={colors?.green}
          isLoading={isPending}
          color="white"
          onClick={() =>
            mutate({
              testid: test?.id,
              patientid: patientId as string,
              logisticsvalue: logisticValue,
              branchid: branchId as string,
            })
          }
        >
          Proceed
        </Button>
      </Box>
    </PlainCard>
  );
};

const TestItem = ({ title, subTitle }: { title: any; subTitle: string }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Text textColor={'black'} fontFamily={'var(--font-rubik)'}>
        {subTitle}
      </Text>
      <Text
        textColor={'black'}
        fontFamily={'var(--font-rubik)'}
        fontWeight={'bold'}
      >
        {title}
      </Text>
    </Flex>
  );
};
