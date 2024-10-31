<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Status;

class StatusSeeder extends Seeder
{
    public function run()
    {
        Status::create([
            'name' => 'Active',
            'description' => 'Indicates that the item is currently in use and functioning as expected.'
        ]);

        Status::create([
            'name' => 'Inactive',
            'description' => 'Indicates that the item is not in use at this moment and is not considered active.'
        ]);

        Status::create([
            'name' => 'Pending',
            'description' => 'Indicates that the item is awaiting an action or decision before being considered final.'
        ]);

        Status::create([
            'name' => 'Archived',
            'description' => 'Indicates that the item is no longer active but is kept for future reference.'
        ]);

        Status::create([
            'name' => 'Suspended',
            'description' => 'Indicates that the item has been temporarily deactivated and could be reactivated in the future.'
        ]);

        Status::create([
            'name' => 'Completed',
            'description' => 'Indicates that the process or task associated with the item has been successfully finished.'
        ]);
    }
}
