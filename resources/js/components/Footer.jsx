import { Link, router } from '@inertiajs/react';
import { CONTACT_INFO, SOCIAL_MEDIA_LINKS } from '@/lib/consts';
import { TransText } from '@/components';
import { useState } from 'react';

const socialLinks = [
    {
        name: 'Facebook',
        href: SOCIAL_MEDIA_LINKS.facebook,
        Icon: ({ className }) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={className}
            >
                <path d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z" />
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
                viewBox="0 0 576 512"
                className={className}
            >
                <path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: SOCIAL_MEDIA_LINKS.linkedin,

        Icon: ({ className }) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={className}
            >
                <path d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z" />
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
                className={className}
            >
                <path d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const [subscriber, setSubscriber] = useState();
    const subscribe = () => {
        router.post(
            '/subscrib',
            {
                data: subscriber,
            },
            {
                onSuccess: () => {
                    // console.log('Success');
                },
                onError: (error) => {
                    // console.log(error);
                },
            },
        );
    };
    return (
        <>
            <section class="relative flex h-[400px] w-full items-center bg-[url('https://media.istockphoto.com/id/494195896/photo/brugge-architecture.jpg?s=1024x1024&w=is&k=20&c=_219KOIkBJZ5AM8u0P_BfyffvNNJ7p1NVuACDtmL0D0=')] bg-cover bg-center px-10 before:absolute before:inset-0 before:z-0 before:bg-black/90 before:content-['']">
                <div class="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-10 md:flex-row">
                    <div class="max-w-xl space-y-4">
                        <h2 class="text-5xl leading-tight font-extrabold tracking-tight text-cl-white capitalize md:text-5xl">
                            <TransText
                                ar="انضم إلى نشرتنا الإخبارية وابقَ على اطلاع.."
                                fr="Rejoignez notre newsletter et restez informé."
                                nl="Schrijf je in voor onze nieuwsbrief en blijf op de hoogte."
                                as="p"
                            />
                        </h2>

                        <p class="text-lg text-yellow-300">
                            <TransText
                                ar="احصل على أحدث الأخبار والتحديثات مباشرة في بريدك الإلكتروني."
                                fr="Recevez les dernières actualités et mises à jour directement dans votre boîte de réception."
                                nl="Ontvang het laatste nieuws en updates rechtstreeks in je inbox."
                                as="p"
                            />
                        </p>
                    </div>

                    <div class="flex w-full max-w-md flex-col gap-4 sm:flex-row">
                        <input
                            onChange={(e) => setSubscriber(e.target.value)}
                            type="email"
                            placeholder="Enter your email..."
                            class="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm focus:border-[#a3b899] focus:ring-2 focus:ring-[#a3b899] focus:outline-none"
                        />

                        <button
                            onClick={subscribe}
                            class="rounded-md bg-[#ed2939] px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase transition hover:bg-[#8fa684]"
                        >
                            <TransText
                                ar="اشترك."
                                fr="S’abonner."
                                nl="Abonneren."
                                as="p"
                            />
                        </button>
                    </div>
                </div>
            </section>

            <footer className="bg-cl-black text-cl-white">
                <div className="container py-12">
                    <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-md">
                            <Link
                                href="/"
                                className="mb-4 inline-flex items-center gap-2"
                            >
                                <img
                                    src="/assets/logo.webp"
                                    alt="CLB KLB"
                                    className="h-8 w-8 shrink-0 object-contain"
                                />
                                <span className="font-semibold text-cl-white">
                                    CLB KLB
                                </span>
                            </Link>
                            <TransText
                                ar="دائرة خريجي بلجيكا، جمعية غير ربحية تخضع لقانون 1 يوليو 1901."
                                fr="Le cercle des lauréats de Belgique, association à but non lucratif régie par la loi du 1er juillet 1901."
                                nl="De kring van Belgische laureaten, een vereniging zonder winstoogmerk geregeld door de wet van 1 juli 1901."
                                as="p"
                                className="text-sm text-cl-white/90"
                            />
                        </div>
                        <div className="flex gap-4">
                            {socialLinks.map(({ name, href, Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    className="transition hover:opacity-80"
                                    aria-label={name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon className="size-6 fill-[#4B5563]" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10">
                    <div className="container flex flex-col items-center justify-between gap-2 px-4 py-4 text-sm text-cl-white/80 sm:flex-row">
                        <TransText
                            ar="© 2026 CLB KLP. جميع الحقوق محفوظة."
                            fr="© 2026 CLB KLP. Tous droits réservés."
                            nl="© 2026 CLB KLP. Alle rechten voorbehouden."
                            as="p"
                        />
                        <div className="flex items-center gap-4">
                            <a
                                href={`tel:${CONTACT_INFO.phone}`}
                                dir="ltr"
                                className="hover:underline"
                            >
                                {CONTACT_INFO.phone}
                            </a>
                            <a
                                href={`mailto:${CONTACT_INFO.email}`}
                                className="hover:underline"
                            >
                                {CONTACT_INFO.email}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
