import { useQuery, gql, ApolloProvider } from '@apollo/client';
import { client } from './client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

type AppProps = { num: number };

const QUERY = gql`
  {
    hello
  }
`;

const App = ({ num }: AppProps) => {
  const { data, loading } = useQuery(QUERY);
  if (loading) {
    return <span>Loading...</span>;
  }
  return <h1>data: {JSON.stringify(data)}</h1>;
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App num={1337} />
  </ApolloProvider>,
  document.body
);
