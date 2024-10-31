<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $table = 'statuses';
    protected $primaryKey = 'id';
    // public $timestamps = false;
    //protected $guarded = []
    protected $fillable = [
        'name',
        'description'
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
    // protected $hidden = [

    // ];
    // protected $dates = [

    // ];
}