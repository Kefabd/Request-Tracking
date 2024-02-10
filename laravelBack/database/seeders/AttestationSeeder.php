<?php

namespace Database\Seeders;

use App\Models\AttestationBourse;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AttestationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AttestationBourse::create([
            'annee' => now(),
            'lieu_de_naissance' => "Casablancai",
            'type_bourse' => "Type l3a9a",
            'demande_id' => 3, // Assuming there are existing Demande records with IDs 1 to $numberOfRecords
        ]);
    }
}
