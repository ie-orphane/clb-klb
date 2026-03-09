import TransText from '@/components/TransText';

export default function EventsHero() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1600&q=80')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-cl-black/50" />
            </div>

            <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center lg:px-8 lg:py-28">
                <h1 className="text-4xl font-bold italic tracking-tight text-cl-white lg:text-5xl">
                    <TransText fr="NOS ÉVÉNEMENTS" ar="فعالياتنا" nl="ONZE EVENEMENTEN" />
                </h1>
                <p className="mt-4 max-w-2xl text-base text-cl-white/80 lg:text-lg">
                    <TransText
                        fr="Découvrez nos rencontres, conférences et galas exclusifs dédiés au réseau"
                        ar="اكتشفوا لقاءاتنا ومؤتمراتنا وحفلاتنا الحصرية المخصصة للشبكة"
                        nl="Ontdek onze bijeenkomsten, conferenties en exclusieve gala's gewijd aan het netwerk"
                    />
                </p>
            </div>
        </section>
    );
}
