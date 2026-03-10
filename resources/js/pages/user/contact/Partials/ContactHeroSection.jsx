import { Phone, MapPin, Mail } from 'lucide-react';
import { TransText } from '@/components';
import { CONTACT_INFO } from '@/lib/consts';

const contactCards = [
    {
        icon: Phone,
        title: { fr: 'TÉLÉPHONE', ar: 'الهاتف', nl: 'TELEFOON' },
        subtitle: {
            fr: 'Du lundi au vendredi de 9h à 18h.',
            ar: 'من الاثنين إلى الجمعة من 9 صباحاً حتى 6 مساءً.',
            nl: 'Maandag tot vrijdag van 9u tot 18u.',
        },
        value: CONTACT_INFO.phone,
        type: 'phone',
    },
    {
        icon: MapPin,
        title: { fr: 'ADRESSE', ar: 'العنوان', nl: 'ADRES' },
        subtitle: {
            fr: 'Venez nous rencontrer.',
            ar: 'تعالوا لزيارتنا.',
            nl: 'Kom ons ontmoeten.',
        },
        value: CONTACT_INFO.address,
        type: 'address',
    },
    {
        icon: Mail,
        title: { fr: 'E-MAIL', ar: 'البريد الإلكتروني', nl: 'E-MAIL' },
        subtitle: {
            fr: 'Notre équipe vous répondra rapidement.',
            ar: 'سيرد فريقنا بسرعة.',
            nl: 'Ons team antwoordt u snel.',
        },
        value: CONTACT_INFO.email,
        type: 'email',
    },
];

export default function ContactHeroSection() {
    return (
        <section className="border-b border-border bg-muted/40 px-4 py-20 lg:px-6 lg:py-28">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                    <TransText
                        fr="Ne cherchez pas sur Google, demandez-nous"
                        ar="لا تبحث في غوغل، اسألنا"
                        nl="Zoek niet op Google, vraag het ons"
                        as="span"
                    />
                </h2>
                <p className="mt-6 max-w-2xl text-muted-foreground">
                    <TransText
                        fr="Une question, une suggestion ou une envie de rejoindre notre réseau ? N'hésitez pas à nous écrire, notre équipe est là pour vous écouter."
                        ar="سؤال، اقتراح أو رغبة في الانضمام إلى شبكتنا؟ لا تتردد في الكتابة إلينا، فريقنا في خدمتك."
                        nl="Een vraag, suggestie of zin om bij ons netwerk te komen? Schrijf ons gerust, ons team staat voor u klaar."
                        as="span"
                    />
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                    {contactCards.map(
                        ({ icon: Icon, title, subtitle, value, type }) => (
                            <div
                                key={type}
                                className="rounded-xl border border-border bg-card p-6 shadow-sm"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-alpha text-cl-white">
                                    <Icon className="h-5 w-5" aria-hidden />
                                </div>
                                <TransText
                                    {...title}
                                    as="p"
                                    className="mt-4 text-xs font-semibold tracking-wider text-foreground uppercase"
                                />
                                <TransText
                                    className="mt-1 text-sm text-muted-foreground"
                                    {...subtitle}
                                    as="p"
                                />
                                <p className="mt-2 font-semibold text-foreground">
                                    {type === 'email' ? (
                                        <a
                                            href={`mailto:${value}`}
                                            className="hover:underline"
                                        >
                                            {value}
                                        </a>
                                    ) : type === 'phone' ? (
                                        <a
                                            href={`tel:${value.replace(/\s/g, '')}`}
                                            className="hover:underline"
                                            dir="ltr"
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        value
                                    )}
                                </p>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
