<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DemandesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('demandes')->insert([
            [
                'etat' => 'En Cours',
                'type_document' => 'Convention de Stage',
                'description' => 'Sample Description A',
                'niveau' => 'Niveau 1',
                'filiere' => 'Filliere A',
                'annee' => '2022-01-01',
                'etudiant_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'etat' => 'Traitee',
                'type_document' => 'Releve De Note',
                'description' => 'Sample Description B',
                'niveau' => 'Niveau 2',
                'filiere' => 'Filliere B',
                'annee' => '2022-01-02',
                'etudiant_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more records as needed
            [
                'etat' => 'En Cours',
                'type_document' => 'Attestation De Bourse',
                'description' => 'Sample Description B',
                'niveau' => 'Niveau 2',
                'filiere' => 'Filliere B',
                'annee' => '2022-01-03',
                'etudiant_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'etat' => 'Traitee',
                'type_document' => 'Certificat De Scolarite',
                'description' => 'Sample Description B',
                'niveau' => 'Niveau 2',
                'filiere' => 'Filliere B',
                'annee' => '2022-01-04',
                'etudiant_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
