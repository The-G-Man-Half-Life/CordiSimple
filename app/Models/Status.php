<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    // protected $table = 'categories';
    // protected $primaryKey = 'id';
    //public $timestamps = false;
    //protected $guarded = []
    protected $fillable = [
        'name',
        'description'
    ];

    // protected $hidden = [

    // ];
    // protected $dates = [

    // ];
}