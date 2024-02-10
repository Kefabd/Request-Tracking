<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Section;
class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Section::create([
            'libelle' => 'A',
            'nombre' =>100,
        ]);
        Section::create([
            'libelle' => 'B',
            'nombre' =>110,
        ]);
        Section::create([
            'libelle' => 'C',
            'nombre' =>115,
        ]);
        Section::create([
            'libelle' => 'D',
            'nombre' =>90,
        ]);
    }
}
