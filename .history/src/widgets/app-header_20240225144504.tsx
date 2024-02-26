import { ToggleTheme } from '@/shared/ui/toggle-theme';
import { Layout } from './_ui/layout';
import { Profile } from './_ui/profile';
import { LogoIcon } from '@/shared/ui/logo-icon';
import { MainNav } from './_ui/main-nav';

export function AppHeader({
    variant,
}: {
    variant: 'auth' | 'private' | 'public';
}) {
    const isProfile = variant !== 'auth';
    return (
        <Layout
            logo={<LogoIcon />}
            nav={<MainNav />}
            profile={isProfile && <Profile />}
            actions={<ToggleTheme />}
        />
    );
}