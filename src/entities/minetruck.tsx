'use client';

import { GET_MINETRUSKS } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

interface MinetruckEdge {
    node: Minetruck;
}

interface Minetruck {
    uuid: string;
    name: string;
    tonnage: number;
    make: string;
}

interface MinetrucksQuery {
    minetrucks: {
        edges: MinetruckEdge[];
    };
}

const Minetruck = () => {
    const { loading, error, data } = useQuery<MinetrucksQuery>(GET_MINETRUSKS);

    const [cars, setCar] = useState([]);

    // console.log(data);
    // useEffect(() => {
    //     const fetchedVehicles = data?.minetrucks?.edges || [];
    //     setCar(fetchedVehicles);
    // }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // if (!data) return <p>Error :(</p>;

    return (
        <div>
            {data?.minetrucks.edges.map(({ node }) => (
                <div key={node.uuid}>
                    <h2>{node.name}</h2>
                    <p>Tonnage: {node.tonnage}</p>
                    <p>Make: {node.make}</p>
                </div>
            ))}
        </div>
    );
};

export default Minetruck;
