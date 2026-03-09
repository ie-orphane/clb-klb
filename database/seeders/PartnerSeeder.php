<?php

namespace Database\Seeders;

use App\Models\Partner;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class PartnerSeeder extends Seeder
{
    /**
     * Copy public image to Storage and return relative path (partners/xxx).
     */
    private function copyToStorage(string $publicPath): string
    {
        $relative = ltrim($publicPath, '/'); // images/partners/xxx.png
        $fullPath = public_path($relative);
        if (!File::isFile($fullPath)) {
            return $publicPath;
        }
        $storageRelative = 'images/partners/' . basename($fullPath);
        Storage::disk('public')->put($storageRelative, File::get($fullPath));
        return $storageRelative;
    }

    public function run(): void
    {
        Partner::query()->delete();

        $partners = [
            ['name' => 'AIM', 'logo_path' => '/images/partners/AIM-Logo.png', 'link' => null],
            ['name' => 'Ali Zaoua', 'logo_path' => '/images/partners/Ali-Zaoua-Logo.jpg', 'link' => null],
            ['name' => 'Ambassade de Belgique au Maroc', 'logo_path' => '/images/partners/Ambassade-Belgique-Maroc.jpg', 'link' => null],
            ['name' => 'CME Africa', 'logo_path' => '/images/partners/CME-Africa.png', 'link' => null],
            ['name' => 'Enabel', 'logo_path' => '/images/partners/Enabel_Logo_Color_RGB.jpg', 'link' => null],
            ['name' => 'ESCA', 'logo_path' => '/images/partners/ESCA.png', 'link' => null],
            ['name' => 'Génération Libre', 'logo_path' => '/images/partners/Generation-Libre-Logo.jpg', 'link' => null],
            ['name' => 'LionsGeek', 'logo_path' => '/images/partners/LionsGeek_logo.jfif', 'link' => null],
            ['name' => 'Délégation Wallonie-Bruxelles au Maroc', 'logo_path' => '/images/partners/Logo_DGWB_MAROC_Vertical_Couleur.png', 'link' => null],
            ['name' => '2M', 'logo_path' => '/images/partners/Logo-2M.png', 'link' => null],
            ['name' => 'APEFE', 'logo_path' => '/images/partners/Logo-APEFE.png', 'link' => null],
            ['name' => 'CCBLM', 'logo_path' => '/images/partners/logo-ccblm-header.png', 'link' => null],
            ['name' => 'CCME', 'logo_path' => '/images/partners/Logo-CCME.jpg', 'link' => null],
            ['name' => 'CJD Maroc', 'logo_path' => '/images/partners/Logo-CJD-Maroc.jpg', 'link' => null],
            ['name' => 'Min Ajliki', 'logo_path' => '/images/partners/Logo-Min-Ajliki.png', 'link' => null],
            ['name' => 'UIR Com & Médias', 'logo_path' => '/images/partners/Logo-UIR-Com-Medias.png', 'link' => null],
            ['name' => 'ULg CEDEM', 'logo_path' => '/images/partners/Logo-ULg-CEDEM.png', 'link' => null],
            ['name' => 'Wafin Europe AISBL', 'logo_path' => '/images/partners/Logo-Wafin-Europe-AISBL.jpg', 'link' => null],
            ['name' => 'Moussem', 'logo_path' => '/images/partners/Moussem-Logo.png', 'link' => null],
            ['name' => 'UIR University', 'logo_path' => '/images/partners/UIR-University.jfif', 'link' => null],
            ['name' => 'UMP Oujda', 'logo_path' => '/images/partners/UMP-Oujda.jpg', 'link' => null],
        ];

        foreach ($partners as $index => $data) {
            $logoPath = $this->copyToStorage($data['logo_path']);
            Partner::create([
                'name' => $data['name'],
                'logo_path' => $logoPath,
                'link' => $data['link'],
                'sort_order' => $index,
            ]);
        }
    }
}
