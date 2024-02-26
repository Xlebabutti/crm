import { ToggleTheme } from '@/shared/ui/toggle-theme';
import { Layout } from './_ui/layout';
import { Profile } from './_ui/profile';
import { MainNav } from './_ui/main-nav';
import { Logo } from './_ui/logo';

export function AppHeader({
    variant,
}: {
    variant: 'auth' | 'private' | 'public';
}) {
    const isProfile = variant !== 'auth';
    return (
        <Layout
            logo={<Logo />}
            nav={<MainNav />}
            profile={isProfile && <Profile />}
            actions={<ToggleTheme />}
        />
    );
}
