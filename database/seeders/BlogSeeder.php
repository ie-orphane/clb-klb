<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $blogs = [
            [
                'image' => 'blogs/PyCTgg94Guly8ZjWAWaGkD5Jv7gn7YCZdsMIhT6z.webp',
                'title' => json_encode([
                    'ar' => 'مرحبا بك في عالم التكنولوجيا',
                    'fr' => 'Bienvenue dans le monde de la technologie',
                    'nl' => 'Welkom in de wereld van technologie',
                ]),
                'description' => json_encode([
                    'ar' => 'اكتشف أحدث التطورات في عالم التكنولوجيا والابتكار',
                    'fr' => 'Découvrez les derniers développements dans le monde de la technologie et de l\'innovation',
                    'nl' => 'Ontdek de nieuwste ontwikkelingen in de wereld van technologie en innovatie',
                ]),
                'body' => json_encode([
                    'ar' => '<p>التكنولوجيا تتطور بسرعة كبيرة في عالمنا اليوم. نشهد تغييرات جذرية في طريقة حياتنا وعملنا.</p>',
                    'fr' => '<p>La technologie évolue rapidement dans notre monde aujourd\'hui. Nous assistons à des changements radicaux dans notre mode de vie et de travail.</p>',
                    'nl' => '<p>Technologie evolueert snel in onze wereld vandaag. We zien radicale veranderingen in onze manier van leven en werken.</p>',
                ]),
                'category' => json_encode([
                    'ar' => 'تكنولوجيا',
                    'fr' => 'Technologie',
                    'nl' => 'Technologie',
                ]),
                'author' => 'John Doe',
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'blogs/PyCTgg94Guly8ZjWAWaGkD5Jv7gn7YCZdsMIhT6z.webp',
                'title' => json_encode([
                    'ar' => 'أثر الذكاء الاصطناعي على المستقبل',
                    'fr' => 'L\'impact de l\'intelligence artificielle sur l\'avenir',
                    'nl' => 'De impact van kunstmatige intelligentie op de toekomst',
                ]),
                'description' => json_encode([
                    'ar' => 'الذكاء الاصطناعي يغير طريقة تفاعلنا مع التكنولوجيا',
                    'fr' => 'L\'IA change la façon dont nous interagissons avec la technologie',
                    'nl' => 'AI verandert de manier waarop we met technologie omgaan',
                ]),
                'body' => json_encode([
                    'ar' => '<p>يُعتبر الذكاء الاصطناعي من أهم التطورات التكنولوجية في العقد القادم.</p>',
                    'fr' => '<p>L\'intelligence artificielle est considérée comme l\'une des avancées technologiques les plus importantes de la prochaine décennie.</p>',
                    'nl' => '<p>Kunstmatige intelligentie wordt beschouwd als een van de belangrijkste technologische doorbraken van het volgende decennium.</p>',
                ]),
                'category' => json_encode([
                    'ar' => 'ذكاء اصطناعي',
                    'fr' => 'Intelligence artificielle',
                    'nl' => 'Kunstmatige intelligentie',
                ]),
                'author' => 'Jane Smith',
                'is_published' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'blogs/PyCTgg94Guly8ZjWAWaGkD5Jv7gn7YCZdsMIhT6z.webp',
                'title' => json_encode([
                    'ar' => 'نصائح لأمان البيانات الشخصية',
                    'fr' => 'Conseils pour la sécurité des données personnelles',
                    'nl' => 'Tips voor persoonlijke gegevensveiligheid',
                ]),
                'description' => json_encode([
                    'ar' => 'كيفية حماية بياناتك الشخصية على الإنترنت',
                    'fr' => 'Comment protéger vos données personnelles en ligne',
                    'nl' => 'Hoe uw persoonlijke gegevens online te beschermen',
                ]),
                'body' => json_encode([
                    'ar' => '<p>أمان البيانات أصبح أكثر أهمية من أي وقت مضى. تعرف على الطرق الفعالة لحماية بياناتك.</p>',
                    'fr' => '<p>La sécurité des données est devenue plus importante que jamais. Découvrez les moyens efficaces de protéger vos données.</p>',
                    'nl' => '<p>Gegevensveiligheid is belangrijker dan ooit. Ontdek effectieve manieren om uw gegevens te beschermen.</p>',
                ]),
                'is_published' => true,
                'category' => json_encode([
                    'ar' => 'أمان البيانات',
                    'fr' => 'Sécurité des données',
                    'nl' => 'Gegevensbeveiliging',
                ]),
                'author' => 'Jane Smith',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'blogs/PyCTgg94Guly8ZjWAWaGkD5Jv7gn7YCZdsMIhT6z.webp',
                'title' => json_encode([
                    'ar' => 'المتعلمون الآليون وتطبيقاتهم',
                    'fr' => 'Les algorithmes d\'apprentissage et leurs applications',
                    'nl' => 'Machine Learning-algoritmen en hun toepassingen',
                ]),
                'description' => json_encode([
                    'ar' => 'فهم كيفية عمل خوارزميات التعلم الآلي',
                    'fr' => 'Comprendre le fonctionnement des algorithmes d\'apprentissage automatique',
                    'nl' => 'Begrijpen hoe machine learning-algoritmen werken',
                ]),
                'body' => json_encode([
                    'ar' => '<p>التعلم الآلي يحتاج إلى فهم عميق للبيانات والخوارزميات.</p>',
                    'fr' => '<p>L\'apprentissage automatique nécessite une compréhension approfondie des données et des algorithmes.</p>',
                    'nl' => '<p>Machine learning vereist diepgaand begrip van gegevens en algoritmen.</p>',
                ]),
                'is_published' => true,
                'category' => json_encode([
                    'ar' => 'تعلم آلي',
                    'fr' => 'Apprentissage automatique',
                    'nl' => 'Machine learning',
                ]),
                'author' => 'Alice Johnson',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'blogs/PyCTgg94Guly8ZjWAWaGkD5Jv7gn7YCZdsMIhT6z.webp',
                'title' => json_encode([
                    'ar' => 'تطور الويب والتطبيقات الحديثة',
                    'fr' => 'L\'évolution du web et des applications modernes',
                    'nl' => 'De evolutie van het web en moderne applicaties',
                ]),
                'description' => json_encode([
                    'ar' => 'استكشف أحدث تقنيات تطوير الويب',
                    'fr' => 'Explorez les dernières techniques de développement web',
                    'nl' => 'Verken de nieuwste webtechnologieën',
                ]),
                'body' => json_encode([
                    'ar' => '<p>الويب المتقدم يتطلب معرفة عميقة بأحدث الأطر والمكتبات.</p>',
                    'fr' => '<p>Le web avancé nécessite une connaissance approfondie des cadres et bibliothèques les plus récents.</p>',
                    'nl' => '<p>Geavanceerde webontwikkeling vereist diepgaande kennis van de nieuwste frameworks en bibliotheken.</p>',
                ]),
                'category' => json_encode([
                    'ar' => 'تطوير الويب',
                    'fr' => 'Développement web',
                    'nl' => 'Webontwikkeling',
                ]),
                'author' => null,
                'is_published' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'blogs/PyCTgg94Guly8ZjWAWaGkD5Jv7gn7YCZdsMIhT6z.webp',
                'title' => json_encode([
                    'ar' => 'السحابة الحوسبية والتطبيقات',
                    'fr' => 'L\'informatique en nuage et les applications',
                    'nl' => 'Cloud Computing en applicaties',
                ]),
                'description' => json_encode([
                    'ar' => 'فوائد وتطبيقات الحوسبة السحابية',
                    'fr' => 'Avantages et applications du cloud computing',
                    'nl' => 'Voordelen en toepassingen van cloud computing',
                ]),
                'body' => json_encode([
                    'ar' => '<p>الحوسبة السحابية توفر مرونة وتوسعية لا مثيل لها.</p>',
                    'fr' => '<p>Le cloud computing offre une flexibilité et une scalabilité inégalées.</p>',
                    'nl' => '<p>Cloud computing biedt ongekende flexibiliteit en schaalbaarheid.</p>',
                ]),
                'category' => json_encode([
                    'ar' => 'الحوسبة السحابية',
                    'fr' => 'Cloud computing',
                    'nl' => 'Cloud computing',
                ]),
                'author' => null,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'blogs/PyCTgg94Guly8ZjWAWaGkD5Jv7gn7YCZdsMIhT6z.webp',
                'title' => json_encode([
                    'ar' => 'أساسيات البرمجة للمبتدئين',
                    'fr' => 'Les bases de la programmation pour les débutants',
                    'nl' => 'De basisbeginselen van programmeren voor beginners',
                ]),
                'description' => json_encode([
                    'ar' => 'تعلم البرمجة من الصفر',
                    'fr' => 'Apprenez la programmation à partir de zéro',
                    'nl' => 'Leer programmeren van nul',
                ]),
                'body' => json_encode([
                    'ar' => '<p>البداية في البرمجة سهلة إذا انتبهت للأساسيات بشكل جيد.</p>',
                    'fr' => '<p>Commencer la programmation est facile si vous faites attention aux bases.</p>',
                    'nl' => '<p>Beginnen met programmeren is gemakkelijk als u goed op de basisbeginselen let.</p>',
                ]),
                'category' => json_encode([
                    'ar' => 'برمجة',
                    'fr' => 'Programmation',
                    'nl' => 'Programmeren',
                ]),
                'author' => 'Bob Williams',
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'blogs/PyCTgg94Guly8ZjWAWaGkD5Jv7gn7YCZdsMIhT6z.webp',
                'title' => json_encode([
                    'ar' => 'أمن المعلومات والتشفير',
                    'fr' => 'Sécurité de l\'information et cryptographie',
                    'nl' => 'Informatiebeveiliging en cryptografie',
                ]),
                'description' => json_encode([
                    'ar' => 'كيفية حماية المعلومات باستخدام التشفير',
                    'fr' => 'Comment protéger les informations à l\'aide du cryptage',
                    'nl' => 'Hoe informatie met encryptie te beveiligen',
                ]),
                'body' => json_encode([
                    'ar' => '<p>التشفير هو المفتاح الأساسي لحماية معلوماتك الحساسة.</p>',
                    'fr' => '<p>Le cryptage est la clé fondamentale pour protéger vos informations sensibles.</p>',
                    'nl' => '<p>Versleuteling is de sleutel tot het beschermen van uw gevoelige informatie.</p>',
                ]),
                'category' => json_encode([
                    'ar' => 'أمن المعلومات',
                    'fr' => 'Sécurité de l\'information',
                    'nl' => 'Informatiebeveiliging',
                ]),
                'author' => 'Bob Williams',
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'blogs/PyCTgg94Guly8ZjWAWaGkD5Jv7gn7YCZdsMIhT6z.webp',
                'title' => json_encode([
                    'ar' => 'الهواتف الذكية والتطبيقات المحمولة',
                    'fr' => 'Les smartphones et les applications mobiles',
                    'nl' => 'Smartphones en mobiele applicaties',
                ]),
                'description' => json_encode([
                    'ar' => 'تطور التطبيقات المحمولة والهواتف الذكية',
                    'fr' => 'L\'évolution des applications mobiles et des smartphones',
                    'nl' => 'De evolutie van mobiele applicaties en smartphones',
                ]),
                'body' => json_encode([
                    'ar' => '<p>التطبيقات المحمولة أصبحت جزء أساسي من حياتنا اليومية.</p>',
                    'fr' => '<p>Les applications mobiles sont devenues une partie essentielle de notre vie quotidienne.</p>',
                    'nl' => '<p>Mobiele applicaties zijn onderdeel geworden van ons dagelijks leven.</p>',
                ]),
                'category' => json_encode([
                    'ar' => 'تطبيقات محمولة',
                    'fr' => 'Applications mobiles',
                    'nl' => 'Mobiele applicaties',
                ]),
                'author' => 'Bob Williams',
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'blogs/PyCTgg94Guly8ZjWAWaGkD5Jv7gn7YCZdsMIhT6z.webp',
                'title' => json_encode([
                    'ar' => 'الشبكات والاتصالات الحديثة',
                    'fr' => 'Les réseaux et les télécommunications modernes',
                    'nl' => 'Moderne netwerken en telecommunicatie',
                ]),
                'description' => json_encode([
                    'ar' => 'تقنيات الشبكات الحديثة والسرعات العالية',
                    'fr' => 'Les technologies modernes de réseau et les vitesses élevées',
                    'nl' => 'Moderne netwerktechnologieën en snelheden',
                ]),
                'body' => json_encode([
                    'ar' => '<p>الشبكات السريعة هي أساس العالم الرقمي المتقدم.</p>',
                    'fr' => '<p>Les réseaux rapides sont la base du monde numérique avancé.</p>',
                    'nl' => '<p>Snelle netwerken zijn de basis van de geavanceerde digitale wereld.</p>',
                ]),
                'category' => json_encode([
                    'ar' => 'تطوير الويب',
                    'fr' => 'Développement web',
                    'nl' => 'Webontwikkeling',
                ]),
                'author' => null,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'blogs/PyCTgg94Guly8ZjWAWaGkD5Jv7gn7YCZdsMIhT6z.webp',
                'title' => json_encode([
                    'ar' => 'الواقع الافتراضي والمعزز',
                    'fr' => 'La réalité virtuelle et augmentée',
                    'nl' => 'Virtuele en augmented reality',
                ]),
                'description' => json_encode([
                    'ar' => 'استكشاف تقنيات الواقع الافتراضي والمعزز',
                    'fr' => 'Explorer les technologies de réalité virtuelle et augmentée',
                    'nl' => 'Verken virtuele en augmented reality-technologieën',
                ]),
                'body' => json_encode([
                    'ar' => '<p>الواقع الافتراضي يفتح آفاق جديدة للتفاعل البشري.</p>',
                    'fr' => '<p>La réalité virtuelle ouvre de nouveaux horizons d\'interaction humaine.</p>',
                    'nl' => '<p>Virtuele realiteit opent nieuwe horizonten voor menselijke interactie.</p>',
                ]),
                'category' => json_encode([
                    'ar' => 'الواقع الافتراضي',
                    'fr' => 'Réalité virtuelle',
                    'nl' => 'Virtuele realiteit',
                ]),
                'is_published' => false,
                'author' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('blogs')->insert($blogs);
    }
}
