<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ReserveSeeder extends Seeder
{
    public function run()
    {
        DB::table('reserves')->insert([
            [
                'createdAt' => Carbon::now(),
                'modifiedAt' => Carbon::now(),
                'status_id' => 1,
                'event_id' => 5,
                'user_id' => 1,
            ],
            [
                'createdAt' => Carbon::now()->subDays(2),
                'modifiedAt' => Carbon::now()->subDays(1),
                'status_id' => 2,
                'event_id' => 7,
                'user_id' => 2,
            ],
            [
                'createdAt' => Carbon::now()->subDays(3),
                'modifiedAt' => Carbon::now()->subDays(1),
                'status_id' => 3,
                'event_id' => 8,
                'user_id' => 3,
            ],
            [
                'createdAt' => Carbon::now()->subWeek(),
                'modifiedAt' => Carbon::now()->subDays(2),
                'status_id' => 1,
                'event_id' => 1,
                'user_id' => 4,
            ],
            [
                'createdAt' => Carbon::now()->subMonth(),
                'modifiedAt' => Carbon::now()->subDays(3),
                'status_id' => null,
                'event_id' => 5,
                'user_id' => 5,
            ],
        ]);
    }
}
