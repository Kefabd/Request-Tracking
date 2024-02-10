<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

         User::create([
             'nom' => 'Kefsi',
             'prenom' => 'Abderrahmane',
             'email' => 'abdoukefsi@gmail.com',
             'password' => bcrypt('1234'),
             'role' =>'admin'
         ]);
         User::create([
             'nom' => 'Hanine',
             'prenom' => 'Nadia',
             'email' => 'nadiahanine19@gmail.com',
             'password' => bcrypt('hanine'),
             'role' =>'etudiant'
         ]);

        User::create([
            'nom' => 'benghazala',
            'prenom' => 'bouchra',
            'email' => 'bouchrabenghazala@gmail.com',
            'password' => bcrypt('ghazala'),
            'role' =>'etudiant'
        ]);

    }
}
