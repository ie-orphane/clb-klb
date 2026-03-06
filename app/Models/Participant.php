<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'event_id',
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
