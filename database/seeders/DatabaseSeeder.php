<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('admin123'),
            'role' => 'admin',
        ]);

        // Create student user
        User::create([
            'name' => 'Vonesson Vergara',
            'email' => 'vonessonvergara@sksu.edu.ph',
            'password' => bcrypt('student123'),
            'role' => 'student',
            'course_id' => null,
            'year_level' => '1st Year',
        ]);
    }
}
