<?php

namespace Database\Seeders;

use App\Models\Etudiant;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EtudiantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Etudiant::create([
            'id'=> 2,
            'cne' => '123456789',
            'code_apogee' => 'AP123',
            'image' => 'https://cdn.vectorstock.com/i/preview-1x/96/75/avatar-9-vector-32409675.jpg',
            'tel' => '0123456789',
            'datenais' => '2000-01-01',
            'user_id' => 2

        ]);

        Etudiant::create([
            'id' => 3,
            'cne' => 'Y1234',
            'code_apogee' => '45729462',
            'image' => 'https://cdn.vectorstock.com/i/preview-1x/96/75/avatar-9-vector-32409675.jpg',
            'tel' => '0608080808',
            'datenais' => '2003-06-01',
            'user_id' => 3
        ]);


    }
}
