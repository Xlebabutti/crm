'use client';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider as NextApolloProvider } from '@apollo/client';

export const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
    const client = new ApolloClient({
        uri: 'http://gkru.e6m.io:30004/v3/graphql',
        cache: new InMemoryCache(),
    });
    return <NextApolloProvider client={client}>{children}</NextApolloProvider>;
};
