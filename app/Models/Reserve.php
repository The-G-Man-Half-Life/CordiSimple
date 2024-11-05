<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reserve extends Model
{
    protected $table = 'reserves';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'created_at',
        'modified_at',
        'status_id', 
        'event_id', 
        'user_id',
    ];

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
