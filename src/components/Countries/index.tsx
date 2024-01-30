import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
    query Countries {
        countries {
            code
            name
            emoji
        }
    }
`;

export default function Countries() {
    const { data, loading, error } = useQuery<{
        countries: { code: string; name: string; emoji: string }[];
    }>(QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    if (!data) return <div>Not DATA</div>;

    return (
        <div>
            {data.countries.map((country) => (
                <div key={country.code}>
                    {country.name} - {country.emoji}
                </div>
            ))}
        </div>
    );
}
