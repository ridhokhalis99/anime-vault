import { ApolloClient, InMemoryCache } from "@apollo/client";

export interface ApolloCacheShape {}

export const apolloClient: ApolloClient<ApolloCacheShape> = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {},
    },
  }),
});
