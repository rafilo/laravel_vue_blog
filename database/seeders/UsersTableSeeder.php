<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //dummy data for admin
        DB::table('admins')->insert([
            'full_name'=>'rafilo',
            'email'=>'rikka9816@gmail.com',
            'password'=>Hash::make('1196966483Remi'),
            'status'=>'active',
        ]);

        //dummy data for user
        DB::table('users')->insert([
            'full_name'=>'user1',
            'email'=>'user1@gmail.com',
            'password'=>Hash::make('123456'),
            'status'=>'active',
        ]);
    }
}
