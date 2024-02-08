import { gql } from '@apollo/client';

export const GET_MINETRUSKS = gql`
    query GetMINETrucks($paging: Paging!, $filter: Filter!) {
        minetrucks(paging: $paging, filter: $filter) {
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
