<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $table = 'blogs';

    protected $fillable = [
        'image',
        'title',
        'description',
        'body',
        'is_published',
        'author',
        'category',
    ];

    protected function casts(): array
    {
        return [
            'title' => 'array',
            'description' => 'array',
            'body' => 'array',
            'category' => 'array',
            'is_published' => 'boolean',
        ];
    }

    /**
     * Get title/description/body for a locale (fr, ar, nl). Falls back to fr then first available.
     */
    public function getTranslation(string $attribute, string $locale): string
    {
        $value = $this->getAttribute($attribute);
        if (! is_array($value)) {
            return '';
        }
        return (string) ($value[$locale] ?? $value['fr'] ?? $value['ar'] ?? $value['nl'] ?? '');
    }
}
