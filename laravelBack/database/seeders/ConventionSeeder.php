<?php

namespace Database\Seeders;

use App\Models\ConventionStage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ConventionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ConventionStage::create([
            'societe' => 'ONEE',
            'date_debut' => now(),
            'date_fin' => now(),
            'demande_id'=> 1,

        ]);
    }
}
