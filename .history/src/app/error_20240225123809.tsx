'use client';

import Error from 'next/error';

export default function GlobalError({ error }: { error: Error }) {
    return (
        <html>
            <body>
                <Error statusCode={undefined as any} />
            </body>
        </html>
    );
}
