import Link from 'next/link';

export function MainNav() {
    return (
        <nav className="flex items-start md:items-center gap-6 text-sm font-medium flex-col md:flex-row ">
            <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/about"
            >
                О нас
            </Link>
            <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/products"
            >
                Продукты
            </Link>
            <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/price"
            >
                Цены
            </Link>
            <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/contacts"
            >
                Контакты
            </Link>
        </nav>
    );
}
