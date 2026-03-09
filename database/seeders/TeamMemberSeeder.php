<?php

namespace Database\Seeders;

use App\Models\TeamMember;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class TeamMemberSeeder extends Seeder
{
    /**
     * Copy public image to Storage and return relative path, or null.
     */
    private function copyToStorage(?string $publicPath): ?string
    {
        if (!$publicPath || !str_starts_with($publicPath, '/images/')) {
            return $publicPath ?: null;
        }
        $relative = ltrim($publicPath, '/'); // images/team/xxx.jpg
        $fullPath = public_path($relative);
        if (!File::isFile($fullPath)) {
            return null;
        }
        $storageRelative = 'images/team/' . basename($fullPath);
        Storage::disk('public')->put($storageRelative, File::get($fullPath));
        return $storageRelative;
    }

    public function run(): void
    {
        TeamMember::query()->delete();

        $bureau = [
            [
                'name' => 'Merouane Touali',
                'category' => 'bureau',
                'image_path' => '/images/team/Merouane-Touali.jpg',
                'position' => 'Président',
                'description' => "Diplômé de l'ULB et l'ULg, consultant en Communication et Relations publiques à Rabat.",
                'sort_order' => 0,
                'show_social' => true,
            ],
            [
                'name' => 'Nadia Sentissi',
                'category' => 'bureau',
                'image_path' => '/images/team/Nadia-Sentissi.jpg',
                'position' => 'Vice-présidente',
                'description' => "Diplômée de l'ULB, pharmacienne à Tanger.",
                'sort_order' => 1,
                'show_social' => false,
            ],
            [
                'name' => 'Ali Serhrouchni',
                'category' => 'bureau',
                'image_path' => null,
                'position' => 'Vice-président',
                'description' => "Diplômé de l'ULg, Universitaire à Rabat.",
                'sort_order' => 2,
                'show_social' => false,
            ],
            [
                'name' => 'Grégory Van Bellinghen',
                'category' => 'bureau',
                'image_path' => null,
                'position' => 'Secrétaire-général',
                'description' => "Diplômé de la KUL et de l'ULB, gestionnaire Fintech B2B à Rabat.",
                'sort_order' => 3,
                'show_social' => false,
            ],
            [
                'name' => 'Christian Jonniaux',
                'category' => 'bureau',
                'image_path' => null,
                'position' => 'Trésorier',
                'description' => "Diplômé de l'ECAM, directeur et consultant IT à Casablanca.",
                'sort_order' => 4,
                'show_social' => false,
            ],
            [
                'name' => 'Sarah Bentefrit',
                'category' => 'bureau',
                'image_path' => '/images/team/Sarah-Bentefrit.jpg',
                'position' => 'Assesseure',
                'description' => "Diplômée de l'ULB, experte en coopération internationale à Rabat.",
                'sort_order' => 5,
                'show_social' => false,
            ],
            [
                'name' => 'Abdessamad Ben Moumen',
                'category' => 'bureau',
                'image_path' => '/images/team/Abdessamad-Ben-Moumen.jpg',
                'position' => 'Assesseur',
                'description' => "Diplômé de Gembloux Agro-Biotech, biochimiste à Berkane.",
                'sort_order' => 6,
                'show_social' => false,
            ],
        ];

        $honorary = [
            [
                'name' => 'Driss El Yazami',
                'category' => 'honorary',
                'image_path' => '/images/team/Driss-ElYazami.jpg',
                'position' => 'Président du Conseil de la communauté marocaine à l\'étranger – CCME',
                'description' => null,
                'sort_order' => 0,
                'show_social' => false,
            ],
            [
                'name' => 'Mohamed Rhachi',
                'category' => 'honorary',
                'image_path' => '/images/team/Mohamed-Rhachi-Universite-Mohammed-V.jpg',
                'position' => "Président de l'Université Mohammed V de Rabat",
                'description' => null,
                'sort_order' => 1,
                'show_social' => false,
            ],
            [
                'name' => 'Gilles Heyvaert',
                'category' => 'honorary',
                'image_path' => '/images/team/Gilles-Heyvaert-Ambassadeur.jpg',
                'position' => "Ambassadeur du Royaume de Belgique au Maroc",
                'description' => null,
                'sort_order' => 2,
                'show_social' => false,
            ],
            [
                'name' => 'Chiraz El Fassi',
                'category' => 'honorary',
                'image_path' => '/images/team/Chiraz-Delegation-Wallonie-Bruxelles.jpg',
                'position' => 'Déléguée-générale Wallonie-Bruxelles au Maroc',
                'description' => null,
                'sort_order' => 3,
                'show_social' => false,
            ],
            [
                'name' => 'François de Vrije',
                'category' => 'honorary',
                'image_path' => '/images/team/François-DeVrije-Hub-Brussels.jpg',
                'position' => 'Représentant de la Région de Bruxelles-Capitale au Maroc',
                'description' => null,
                'sort_order' => 4,
                'show_social' => false,
            ],
        ];

        foreach (array_merge($bureau, $honorary) as $member) {
            $imagePath = $this->copyToStorage($member['image_path'] ?? null);
            $member['image_path'] = $imagePath;
            TeamMember::create($member);
        }
    }
}
