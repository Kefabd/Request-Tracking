<?php

namespace Database\Seeders;

use App\Models\CertificatScolarite;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CertificatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CertificatScolarite::create([
            'date' => now(),
            'lieu_de_naissance' => "Casablanca",
            'demande_id' => 4, // Assuming there are existing Demande records with IDs 1 to $numberOfRecords
        ]);
    }
}
