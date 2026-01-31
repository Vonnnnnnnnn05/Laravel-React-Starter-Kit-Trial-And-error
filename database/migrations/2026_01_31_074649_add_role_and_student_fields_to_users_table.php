<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('role', ['admin', 'student'])
                  ->default('student')
                  ->after('password');

            $table->unsignedBigInteger('course_id')
                  ->nullable()
                  ->after('role');

            $table->enum('year_level', [
                '1st Year',
                '2nd Year',
                '3rd Year',
                '4th Year'
            ])->nullable()
              ->after('course_id');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['role', 'course_id', 'year_level']);
        });
    }
};
