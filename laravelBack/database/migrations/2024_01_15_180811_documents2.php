<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('documents2', function (Blueprint $table) {
            $table->id();
            $table->string('niveau');
            $table->string('filiere');
            $table->string('type_document');
            $table->text('description');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('documents2');
    }
};
