import { Link, usePage, router } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';
import TransText from '@/components/TransText';

const navLinks = [
    { key: 'home', href: '/', hasDropdown: false, fr: 'ACCUEIL', ar: 'الرئيسية', nl: 'HOME' },
    { key: 'about', href: '/a-propos', hasDropdown: false, fr: 'À PROPOS', ar: 'عنا', nl: 'OVER ONS' },
    { key: 'news', href: '#', hasDropdown: true, fr: 'ACTUALITÉS', ar: 'أخبار', nl: 'NIEUWS' },
    { key: 'contact', href: '/contact', hasDropdown: false, fr: 'CONTACT', ar: 'اتصل', nl: 'CONTACT' },
];

const LOCALES = [
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'العربية' },
    { code: 'nl', label: 'NL' },
];

export default function Navbar() {
    const { props } = usePage();
    const locale = props.locale && ['fr', 'ar', 'nl'].includes(props.locale) ? props.locale : 'fr';
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    function setLocale(code) {
        if (code === locale) return;
        router.post('/locale', { locale: code }, { preserveScroll: true });
        setOpen(false);
    }

    return (
        <header className="fixed left-0 right-0 top-0 z-50 bg-cl-white">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-alpha text-cl-black">
                        <span className="text-xs font-bold">CLB KLP</span>
                    </div>
                    <span className="text-lg font-semibold text-cl-black">CLB KLP</span>
                </Link>

                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map(({ key, href, hasDropdown, fr, ar, nl }) => {
                        const path = href === '/' ? '/' : href;
                        const isActive = path !== '/' ? window.location.pathname.startsWith(path) : window.location.pathname === '/';
                        return (
                            <li key={key} className="flex items-center gap-1">
                                <Link
                                    href={href}
                                    className={`text-sm font-medium text-cl-black transition hover:opacity-90 ${isActive ? 'underline underline-offset-4' : ''}`}
                                >
                                    <TransText fr={fr} ar={ar} nl={nl} as="span" />
                                </Link>
                                {hasDropdown && (
                                    <svg className="h-4 w-4 text-cl-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-4" ref={ref}>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            className="flex items-center gap-1 text-sm font-medium text-cl-black transition hover:opacity-90"
                            aria-label="Langue"
                            aria-expanded={open}
                        >
                            {LOCALES.find((l) => l.code === locale)?.label ?? 'FR'}
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {open && (
                            <ul className="absolute end-0 top-full z-50 mt-1 min-w-32 rounded-lg border border-border bg-card py-1 shadow-md">
                                {LOCALES.map((l) => (
                                    <li key={l.code}>
                                        <button
                                            type="button"
                                            onClick={() => setLocale(l.code)}
                                            className={`block w-full px-4 py-2 text-start text-sm transition hover:bg-muted ${l.code === locale ? 'font-medium text-foreground' : 'text-muted-foreground'}`}
                                        >
                                            {l.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <Link
                        href="#"
                        className="rounded-lg bg-alpha px-4 py-2 text-sm font-medium uppercase text-cl-white transition hover:opacity-95"
                    >
                        <TransText fr="DEVENIR MEMBRE" ar="كن عضواً" nl="LID WORDEN" as="span" />
                    </Link>
                </div>
            </nav>
        </header>
    );
}
