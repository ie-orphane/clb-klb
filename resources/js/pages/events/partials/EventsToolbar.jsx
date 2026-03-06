import { useTrans } from '@/hooks/use-trans';

const statusTabs = [
    { id: 'upcoming', label: { fr: 'À venir', ar: 'القادمة', nl: 'Aankomend' }, active: true },
    { id: 'past', label: { fr: 'Passés', ar: 'الماضية', nl: 'Afgelopen' }, active: false },
];

const typeFilters = [
    { id: 'all', label: { fr: 'Tous', ar: 'الكل', nl: 'Alle' }, active: true },
    { id: 'conference', label: { fr: 'Conférence', ar: 'مؤتمر', nl: 'Conferentie' }, active: false },
    { id: 'gala', label: { fr: 'Gala', ar: 'حفل', nl: 'Gala' }, active: false },
    { id: 'networking', label: { fr: 'Networking', ar: 'تواصل', nl: 'Networking' }, active: false },
];

export default function EventsToolbar() {
    const { t } = useTrans();
    return (
        <section className="bg-background">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
                <div className="flex items-center gap-6">
                    {statusTabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            className={`pb-1 text-sm font-medium transition ${
                                tab.active
                                    ? 'border-b-2 border-cl-black text-cl-black'
                                    : 'text-cl-beta hover:text-cl-black'
                            }`}
                        >
                            {t(tab.label)}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    {typeFilters.map((filter) => (
                        <button
                            key={filter.id}
                            type="button"
                            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                                filter.active
                                    ? 'bg-alpha text-cl-white'
                                    : 'border border-border bg-cl-white text-cl-black hover:border-alpha/40'
                            }`}
                        >
                            {t(filter.label)}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
