import { Link } from '@inertiajs/react';
import { TransText } from '@/components';
import { CONTACT_INFO } from '@/lib/consts';

export default function ContactStripSection() {
    return (
        <section className="border-b border-border bg-background py-12 lg:py-14">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-sm sm:grid-cols-3 lg:p-10">
                    <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="group flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left"
                    >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-alpha/10 text-alpha transition group-hover:bg-alpha group-hover:text-cl-white">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-2C7.82 23 2 17.18 2 10V8z"
                                />
                            </svg>
                        </span>
                        <div>
                            <TransText
                                fr="Téléphone"
                                ar="هاتف"
                                nl="Telefoon"
                                as="p"
                                className="text-xs font-semibold tracking-wider text-muted-foreground uppercase"
                            />
                            <p className="mt-0.5 font-semibold text-foreground group-hover:text-alpha">
                                {CONTACT_INFO.phone}
                            </p>
                        </div>
                    </a>
                    <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="group flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left"
                    >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-alpha/10 text-alpha transition group-hover:bg-alpha group-hover:text-cl-white">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </span>
                        <div>
                            <TransText
                                fr="Email"
                                ar="البريد"
                                nl="E-mail"
                                as="p"
                                className="text-xs font-semibold tracking-wider text-muted-foreground uppercase"
                            />
                            <p className="mt-0.5 font-semibold break-all text-foreground group-hover:text-alpha">
                                {CONTACT_INFO.email}
                            </p>
                        </div>
                    </a>
                    <Link
                        href={CONTACT_INFO.map_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left"
                    >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-alpha/10 text-alpha transition group-hover:bg-alpha group-hover:text-cl-white">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </span>
                        <div>
                            <TransText
                                fr="Adresse"
                                ar="العنوان"
                                nl="Adres"
                                as="p"
                                className="text-xs font-semibold tracking-wider text-muted-foreground uppercase"
                            />
                            <p className="mt-0.5 font-semibold text-foreground group-hover:text-alpha">
                                {CONTACT_INFO.address}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
