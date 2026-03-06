<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => env('SEEDER_USER_NAME'),
        //     'email' => env('SEEDER_USER_EMAIL'),
        //     'password' => env('SEEDER_USER_PASSWORD'),
        //     'role' => env('SEEDER_USER_ROLE'),
        // ]);


         $events = [
            [
                'title'       => json_encode(['fr' => "F'tor-Débat : Leadership Féminin, Réalités Et Défis", 'ar' => "إفطار-نقاش: القيادة النسائية، الواقع والتحديات", 'nl' => "F'tor-Debat: Vrouwelijk Leiderschap, Realiteiten en Uitdagingen"]),
                'description' => json_encode(['fr' => "Rencontre exceptionnelle avec Dr Younes Sakkouri, Ministre de l'Inclusion...", 'ar' => "لقاء استثنائي مع الدكتور يونس السكوري، وزير الإدماج...", 'nl' => "Uitzonderlijke ontmoeting met Dr. Younes Sakkouri, Minister van Inclusie..."]),
                'date'        => '2026-03-06',
                'time'        => '17:30:00',
                'categorie'   => json_encode(['fr' => 'Conférence', 'ar' => 'مؤتمر', 'nl' => 'Conferentie']),
                'price'       => 300,
                'image'       => 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80',
                'location'    => 'Cinéma Renaissance, Rabat',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
            [
                'title'       => json_encode(['fr' => 'Gala Annuel des Lauréats de Belgique', 'ar' => 'الحفل السنوي لخريجي بلجيكا', 'nl' => 'Jaarlijks Gala van Belgische Laureaten']),
                'description' => json_encode(['fr' => "Célébrez l'excellence et l'amitié maroco-belge lors de notre prestigieux gala annuel. Dîner...", 'ar' => "احتفلوا بالتميز والصداقة المغربية البلجيكية خلال حفلنا السنوي المرموق. عشاء...", 'nl' => "Vier de uitmuntendheid en de Marokkaans-Belgische vriendschap tijdens ons prestigieus jaarlijks gala. Diner..."]),
                'date'        => '2026-04-15',
                'time'        => '19:00:00',
                'categorie'   => json_encode(['fr' => 'Gala', 'ar' => 'حفل', 'nl' => 'Gala']),
                'price'       => 0,
                'image'       => 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
                'location'    => 'Hôtel Sofitel, Casablanca',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
            [
                'title'       => json_encode(['fr' => 'Afterwork B2B : Synergies Économiques', 'ar' => 'لقاء مهني: التآزر الاقتصادي', 'nl' => 'Afterwork B2B: Economische Synergieën']),
                'description' => json_encode(['fr' => 'Une soirée de réseautage dédiée aux entrepreneurs et cadres dirigeants pour créer de...', 'ar' => 'أمسية تواصل مخصصة لرواد الأعمال والمديرين التنفيذيين لإنشاء...', 'nl' => 'Een netwerkevenement gewijd aan ondernemers en leidinggevenden om...']),
                'date'        => '2026-05-28',
                'time'        => '18:30:00',
                'categorie'   => json_encode(['fr' => 'Networking', 'ar' => 'تواصل', 'nl' => 'Networking']),
                'price'       => 0,
                'image'       => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
                'location'    => 'The View Hotel, Rabat',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
        ];

        DB::table('events')->insert($events);
    }
}
