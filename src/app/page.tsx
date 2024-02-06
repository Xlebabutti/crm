import { AppHeader } from '@/widgets/app-header';

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col p-8">
            <AppHeader variant={'public'}></AppHeader>
        </main>
    );
}
