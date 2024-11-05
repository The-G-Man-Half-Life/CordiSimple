<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reserve extends Model
{
    protected $table = 'Reserve';
    protected $primaryKey = 'id';
    public $timestamps = true;
    // protected $guarded = [];

    protected $fillable = [
        'CreateAt',
        "ModifiedAt",
        "Status_Id",
        "Event_Id",
        "User_Id",
    ];

    public function status(){
        return $this->belongsTo(Status::class);
    }

    public function event(){
        return $this->belongsTo(Event::class);
    }

    public function user(){ 
        return $this->belongsTo(User::class);
    }
    protected $dates = [
        'date'
    ];
}
