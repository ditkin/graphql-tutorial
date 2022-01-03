import React, { ReactElement } from 'react';
import * as rxFunctions from 'rxjs';
import gql from 'graphql-tag';
import { User } from './types/User';

type LodashFunctionListProps = {
  data: {
    user: User;
  };
};

export const LodashFunctionList = ({ data }: LodashFunctionListProps) => {
  return (
    <>
      Thank you for being a loyal member for {data.user.monthsActive} months!
      <ul>
        {Object.values(rxFunctions).map(
          (func: any): ReactElement => (
            <li>{func.name}</li>
          )
        )}
      </ul>
    </>
  );
};

export const monthsActiveUserFragment = gql`
  fragment MonthsActiveFragment on User {
    monthsActive
  }
`;
