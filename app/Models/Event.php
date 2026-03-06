<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'title',
        'description',
        'date',
        'time',
        'categorie',
        'price',
        'image',
        'location',
    ];

    protected $casts = [
        'title' => 'array',
        'description' => 'array',
        'categorie' => 'array',
    ];

    public function participants()
    {
        return $this->hasMany(Participant::class);
    }
}
