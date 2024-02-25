import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

export interface MinetruckEdge {
    node: Minetruck;
}

export interface Minetruck {
    uuid: string;
    name: string;
    tonnage: number;
    make: string;
}

export interface MinetrucksQuery {
    minetrucks: {
        edges: MinetruckEdge[];
    };
}

export type GetMinetrucksQuery = MinetrucksQuery;

export const GetMinetrucksDocument: DocumentNode = gql`
    query GetMinetrucks {
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
