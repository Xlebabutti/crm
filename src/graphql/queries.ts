import { gql } from '@apollo/client';

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
