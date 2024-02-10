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
        Schema::create('groupes', function (Blueprint $table) {
            $table->id(); // Auto-incremental primary key
            $table->string('niveau');
            $table->integer('annee');
            $table->unsignedBigInteger('section_id')->nullable(); // Add nullable for section_id
            $table->unsignedBigInteger('filliere_id')->nullable(); // Add nullable for section_id

            $table->foreign('section_id')->references('id')->on('sections')->onDelete('cascade');
            $table->foreign('filliere_id')->references('id')->on('fillieres')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('groupes');
    }
};
