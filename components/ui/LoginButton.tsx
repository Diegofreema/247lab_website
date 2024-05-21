import React from 'react';
import { FltBtn } from '../FltBtn';
import { cookies } from 'next/headers';

type Props = {};

const LoginButtonContainer = (props: Props) => {
  const cookieStore = cookies();
  const patientId = cookieStore.get('patientId');

  return <div>{!patientId && <FltBtn />}</div>;
};

export default LoginButtonContainer;
