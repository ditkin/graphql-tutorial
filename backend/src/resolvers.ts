import { User } from './generated/graphql';

// The root provides a resolver function for each API endpoint
export const root = {
  hello: () => {
    return 'Hello world!';
  },
  user: (): User => {
    return { id: '5', name: 'david', monthsActive: 4 };
  },
};
