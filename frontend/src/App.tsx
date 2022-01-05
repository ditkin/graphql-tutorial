import React, { Suspense, lazy } from 'react';
import { gql, useQuery } from '@apollo/client';
import GreetingBanner from './GreetingBanner';
import { monthsActiveUserFragment } from './RxFunctionList';

const RxFunctionList = lazy(async () => {
  const module = await import('./RxFunctionList');
  return { default: module.RxFunctionList };
});

type AppProps = {};

const QUERY = gql`
  {
    user {
      id
      name
      ...MonthsActiveFragment
    }
  }
  ${monthsActiveUserFragment}
`;

export default ({}: AppProps) => {
  const { data, loading, error } = useQuery(QUERY);

  if (error) {
    return <span>error</span>;
  }

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <GreetingBanner data={data} />
      <RxFunctionList data={data} />
    </Suspense>
  );
};
