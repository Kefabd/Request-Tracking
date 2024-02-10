<?php

namespace Database\Seeders;

use App\Models\Filliere;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FilliereSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Filliere::create([
            'libelle' => 'IAGI',
            'nombre' =>55,
        ]);
        Filliere::create([
            'libelle' => 'GSI',
            'nombre' =>110,
        ]);
        Filliere::create([
            'libelle' => 'MSEI',
            'nombre' =>44,
        ]);
        Filliere::create([
            'libelle' => 'GEM',
            'nombre' =>40,
        ]);
        Filliere::create([
            'libelle' => 'GMI',
            'nombre' =>56,
        ]);
    }
}
