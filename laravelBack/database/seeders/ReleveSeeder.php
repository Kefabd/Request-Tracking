<?php

namespace Database\Seeders;

use App\Models\ReleveNotes;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReleveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ReleveNotes::create([
            'niveau' => "Niveau 1",
            'annee' => now(),
            'session' => "Session 1",
            'demande_id' => 2, // Assuming there are existing Demande records with IDs 1 to $numberOfRecords
        ]);
    }
}
