import { useForm, usePage } from '@inertiajs/react';
import { TransText } from '@/components';
import { SOCIAL_MEDIA_LINKS } from '@/lib/consts';

const socialLinks = [
    {
        name: 'Facebook',
        href: SOCIAL_MEDIA_LINKS.facebook,
        Icon: ({ className }) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={className}
            >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: SOCIAL_MEDIA_LINKS.instagram,

        Icon: ({ className }) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                className={className}
            >
                <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        href: SOCIAL_MEDIA_LINKS.youtube,

        Icon: ({ className }) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={className}
            >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: SOCIAL_MEDIA_LINKS.linkedin,

        Icon: ({ className }) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={className}
            >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        name: 'X',
        href: SOCIAL_MEDIA_LINKS.x,

        Icon: ({ className }) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                className={className}
            >
                <path d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z" />
            </svg>
        ),
    },
];

export default function ContactFormSection() {
    const { props } = usePage();
    const locale =
        props.locale && ['fr', 'ar', 'nl'].includes(props.locale)
            ? props.locale
            : 'fr';
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post('/contact', {
            preserveScroll: true,
        });
    }

    return (
        <section className="border-b border-border bg-background py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <TransText
                            fr="RESTONS CONNECTÉS"
                            ar="لنبق على تواصل"
                            nl="BLIJF VERBONDEN"
                            as="p"
                            className="text-sm font-semibold tracking-wider text-alpha uppercase"
                        />

                        <TransText
                            fr="Contactez-Nous"
                            ar="اتصل بنا"
                            nl="Contacteer ons"
                            as="h2"
                            className="mt-2 text-3xl font-bold text-foreground lg:text-4xl"
                        />

                        <TransText
                            fr="Le Club des Diplômées de Belgique au Maroc (CLB) est votre point de contact pour toutes les activités, partenariats ou envies de rejoindre notre réseau. N'hésitez pas à nous écrire."
                            ar="نادي خريجات بلجيكا في المغرب (CLB) هو نقطة اتصالك لجميع الأنشطة والشراكات أو الرغبة في الانضمام إلى شبكتنا. لا تتردد في الكتابة إلينا."
                            nl="De Club van Belgische Afgestudeerden in Marokko (CLB) is uw contactpunt voor activiteiten, partnerschappen of om bij ons netwerk te komen. Schrijf ons gerust."
                            as="p"
                            className="mt-6 leading-relaxed text-foreground/90"
                        />

                        <TransText
                            fr="SUIVEZ-NOUS"
                            ar="تابعنا"
                            nl="VOLG ONS"
                            as="p"
                            className="mt-8 text-sm font-semibold tracking-wider text-alpha uppercase"
                        />

                        <div className="mt-4 flex gap-3">
                            {socialLinks.map(({ name, href, Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition hover:bg-primary hover:text-primary-foreground"
                                    aria-label={name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-card p-6 shadow-(--shadow-card) lg:p-8">
                        <h3 className="text-xl font-semibold text-foreground">
                            <TransText
                                fr="Envoyez-nous un message"
                                ar="أرسل لنا رسالة"
                                nl="Stuur ons een bericht"
                                as="span"
                            />
                        </h3>
                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-4"
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className="mb-1 block text-sm font-medium text-foreground"
                                    >
                                        <TransText
                                            fr="Nom Complet"
                                            ar="الاسم الكامل"
                                            nl="Volledige naam"
                                            as="span"
                                        />
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        placeholder="Jean Dupont"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                                        autoComplete="name"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-destructive">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="mb-1 block text-sm font-medium text-foreground"
                                    >
                                        <TransText
                                            fr="E-mail"
                                            ar="البريد الإلكتروني"
                                            nl="E-mail"
                                            as="span"
                                        />
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        placeholder="jean@exemple.com"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                                        autoComplete="email"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-destructive">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="contact-subject"
                                    className="mb-1 block text-sm font-medium text-foreground"
                                >
                                    Sujet
                                </label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    placeholder="Objet de votre message"
                                    value={data.subject}
                                    onChange={(e) =>
                                        setData('subject', e.target.value)
                                    }
                                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                                />
                                {errors.subject && (
                                    <p className="mt-1 text-sm text-destructive">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="mb-1 block text-sm font-medium text-foreground"
                                >
                                    <TransText
                                        fr="Message (optionnel)"
                                        ar="الرسالة (اختياري)"
                                        nl="Bericht (optioneel)"
                                        as="span"
                                    />
                                </label>
                                <textarea
                                    id="contact-message"
                                    rows={4}
                                    placeholder="Votre message ici..."
                                    value={data.message}
                                    onChange={(e) =>
                                        setData('message', e.target.value)
                                    }
                                    className="w-full resize-y rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-destructive">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-full bg-alpha px-12 py-4 text-sm font-semibold text-cl-white uppercase transition hover:bg-alpha/95 disabled:bg-alpha/70"
                                >
                                    {processing
                                        ? locale === 'ar'
                                            ? 'جاري الإرسال...'
                                            : locale === 'nl'
                                              ? 'Verzenden...'
                                              : 'Envoi...'
                                        : locale === 'ar'
                                          ? 'إرسال'
                                          : locale === 'nl'
                                            ? 'VERSTUREN'
                                            : 'ENVOYER'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
