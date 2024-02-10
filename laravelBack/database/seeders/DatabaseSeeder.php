<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\ConventionStage;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call(UserSeeder::class);
        $this->call(EtudiantSeeder::class);
        // $this->call(DemandesSeeder::class);
        // $this->call(AttestationSeeder::class);
        // $this->call(CertificatSeeder::class);
        // $this->call(ConventionSeeder::class);
        // $this->call(ReleveSeeder::class);


    }
}
