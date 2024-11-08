<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'John',
            'last_name' => 'Doe',
            'email' => 'john@example.com',
            'password' => Hash::make('password123'), // Encriptar la contraseña
            'birthdate' => Carbon::create('1990', '01', '01'),
            'is_admin' => true,
        ]);

        User::create([
            'name' => 'Jane',
            'last_name' => 'Smith',
            'email' => 'jane@example.com',
            'password' => Hash::make('password123'),
            'birthdate' => Carbon::create('1992', '05', '15'),
            'is_admin' => false,
        ]);

        User::create([
            'name' => 'Alice',
            'last_name' => 'Johnson',
            'email' => 'alice@example.com',
            'password' => Hash::make('password123'),
            'birthdate' => Carbon::create('1985', '08', '22'),
            'is_admin' => false,
        ]);

        User::create([
            'name' => 'Bob',
            'last_name' => 'Brown',
            'email' => 'bob@example.com',
            'password' => Hash::make('password123'),
            'birthdate' => Carbon::create('1995', '12', '30'),
            'is_admin' => false,
        ]);

        User::create([
            'name' => 'Charlie',
            'last_name' => 'Davis',
            'email' => 'charlie@example.com',
            'password' => Hash::make('password123'),
            'birthdate' => Carbon::create('1993', '06', '18'),
            'is_admin' => true,
        ]);
    }
}
