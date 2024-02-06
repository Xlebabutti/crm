'use client';

import { GET_MINETRUSKS } from '@/graphql/queries';
import { useQuery } from '@apollo/client';

const Minetruck = () => {
    const { data } = useQuery(GET_MINETRUSKS);
    console.log(data);
    return <div>Enter</div>;
};

export default Minetruck;
