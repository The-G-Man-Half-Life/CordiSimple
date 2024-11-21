<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reserve extends Model
{
    protected $table = 'reserves';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'status_Id', 
        'event_Id', 
        'user_Id',
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
