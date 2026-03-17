import TransText from '@/components/TransText';

export function EventDetailContent({ event }) {
    return (
        <section className="bg-background py-12 lg:py-20">
            <div className="container grid gap-10 lg:grid-cols-2">
                <div>
                    <TransText
                        fr="À propos de l'événement"
                        ar="حول الفعالية"
                        nl="Over het evenement"
                        as="h2"
                        className="text-xl font-bold text-cl-black"
                    />
                    <TransText
                        {...event.description}
                        as="p"
                        className="mt-4 text-sm leading-relaxed text-cl-beta"
                    />

                    {event.agenda && event.agenda.length > 0 && (
                        <div className="mt-10">
                            <h3 className="text-sm font-bold tracking-wide text-cl-black uppercase">
                                <TransText
                                    fr="Programme"
                                    ar="البرنامج"
                                    nl="Programma"
                                />
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm text-cl-beta">
                                {event.agenda.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-1.75 h-2 w-2 shrink-0 rounded-full bg-alpha" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <aside className="space-y-6 rounded-2xl bg-cl-blue-light/40 p-6 text-sm text-cl-black">
                    <div>
                        <h3 className="text-xs font-bold tracking-wide text-cl-beta uppercase">
                            <TransText
                                fr="Informations pratiques"
                                ar="معلومات عملية"
                                nl="Praktische informatie"
                            />
                        </h3>
                        <dl className="mt-4 space-y-3">
                            <div className="flex justify-between gap-3">
                                <dt className="text-xs text-cl-beta">Date</dt>
                                <dd className="text-xs font-semibold text-cl-black">
                                    {event.date}
                                </dd>
                            </div>
                            <div className="flex justify-between gap-3">
                                <dt className="text-xs text-cl-beta">
                                    <TransText
                                        fr="Heure"
                                        ar="الساعة"
                                        nl="Uur"
                                    />
                                </dt>
                                <dd className="text-xs font-semibold text-cl-black">
                                    {event.time}
                                </dd>
                            </div>
                            <div className="flex justify-between gap-3">
                                <dt className="text-xs text-cl-beta">
                                    <TransText
                                        fr="Lieu"
                                        ar="المكان"
                                        nl="Locatie"
                                    />
                                </dt>
                                <dd className="text-right text-xs font-semibold text-cl-black">
                                    {event.location}
                                </dd>
                            </div>
                            <div className="flex justify-between gap-3">
                                <dt className="text-xs text-cl-beta">
                                    <TransText
                                        fr="Tarif"
                                        ar="السعر"
                                        nl="Tarief"
                                    />
                                </dt>
                                <dd className="text-xs font-bold text-alpha">
                                    {event.price === 0 ? (
                                        <TransText
                                            fr="Gratuit"
                                            ar="مجاني"
                                            nl="Gratis"
                                        />
                                    ) : (
                                        event.price
                                    )}
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div className="border-t border-border pt-5">
                        <TransText
                            fr="Partagez l'événement"
                            ar="شاركوا الفعالية"
                            nl="Deel het evenement"
                            as="h3"
                            className="text-xs font-bold tracking-wide text-cl-beta uppercase"
                        />
                        <div className="mt-3 flex flex-wrap gap-2">
                            <button
                                type="button"
                                className="rounded-full border border-border bg-cl-white px-4 py-2 text-xs font-semibold text-cl-black transition hover:border-alpha hover:text-alpha"
                            >
                                LinkedIn
                            </button>
                            <button
                                type="button"
                                className="rounded-full border border-border bg-cl-white px-4 py-2 text-xs font-semibold text-cl-black transition hover:border-alpha hover:text-alpha"
                            >
                                Facebook
                            </button>
                            <button
                                type="button"
                                className="rounded-full border border-border bg-cl-white px-4 py-2 text-xs font-semibold text-cl-black transition hover:border-alpha hover:text-alpha"
                            >
                                <TransText
                                    fr="Copier le lien"
                                    ar="نسخ الرابط"
                                    nl="Link kopiëren"
                                />
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default EventDetailContent;
