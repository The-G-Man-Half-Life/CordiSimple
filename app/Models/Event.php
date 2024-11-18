<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = 'events';
    protected $primaryKey = 'id';
    // public $timestamps = false;
    //protected $guarded = []
    protected $fillable = [
        'name',
        'description',
        'date',
        'ubication',
        'capacity',
        'status_id',
        'user_id'
    ];

    public function status()
    {
        return $this->belongsTo(Status::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    protected $hidden = [

    ];
    protected $dates = [
        'date'
    ];
}
