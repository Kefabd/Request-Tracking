<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('demandes', function (Blueprint $table) {
            $table->id(); // Auto-incremental primary key
            $table->string('etat');
            $table->string('type_document');
            $table->string('description');
            $table->string('niveau');
            $table->string('filiere'); 
            $table->date('annee'); 

            $table->unsignedBigInteger('etudiant_id')->nullable();

            $table->softDeletes();
            $table->timestamps(); // Created at and Updated at timestamps
            $table->foreign('etudiant_id')->references('id')->on('etudiants');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demandes');
    }
};
