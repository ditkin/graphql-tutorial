import * as React from 'react';
import { User } from './types/User';

type GreetingBannerProps = {
  data: {
    user: User;
  };
};

export default ({ data }: GreetingBannerProps) => {
  return <h1>Hi {data.user.name}</h1>;
};
