<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    protected $fillable = [
        'name',
        'logo_path',
        'link',
        'sort_order',
    ];

    protected $appends = ['logo_url'];

    /**
     * Storage-relative path (no leading /storage/).
     */
    public function getLogoPathStorageAttribute(): ?string
    {
        $path = $this->attributes['logo_path'] ?? null;
        if (!$path) {
            return null;
        }
        if (str_starts_with($path, 'storage/')) {
            return substr($path, 8);
        }
        if (str_starts_with($path, '/storage/')) {
            return substr($path, 9);
        }
        return $path;
    }

    /**
     * Full URL for the logo (Storage or legacy public path).
     */
    public function getLogoUrlAttribute(): ?string
    {
        $path = $this->attributes['logo_path'] ?? null;
        if (!$path) {
            return null;
        }
        if (str_starts_with($path, 'http')) {
            return $path;
        }
        if (str_starts_with($path, '/storage/')) {
            return asset(ltrim($path, '/'));
        }
        if (str_starts_with($path, '/')) {
            return asset($path);
        }
        return asset('storage/' . $path);
    }
}
