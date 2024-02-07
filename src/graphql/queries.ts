import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

export const GET_MINETRUSKS = gql`
    query {
        minetrucks(paging: { limit: 100 }, filter: "object.tonnage > 0") {
            edges {
                node {
                    uuid
                    name
                    tonnage
                    make
                }
            }
        }
    }
`;
