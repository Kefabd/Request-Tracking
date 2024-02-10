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
        Schema::create('releve_de_notes', function (Blueprint $table) {
            $table->id(); // Auto-incremental primary key
            $table->string('niveau');
            $table->date('annee');
            $table->string('session');

            $table->unsignedBigInteger('demande_id')->nullable();

            $table->softDeletes();
            $table->timestamps(); // Created at and Updated at timestamps
            $table->foreign('demande_id')->references('id')->on('demandes');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('releve_de_notes');
    }
};
