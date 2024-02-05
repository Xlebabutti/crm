export function AppHeader({
    variant,
}: {
    variant: 'auth' | 'private' | 'public';
}) {
    const isProfile = variant !== 'auth';
    return <div className=""></div>;
}
