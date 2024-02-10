<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document2 extends Model
{
    use HasFactory;

    protected $fillable = ['niveau', 'filiere', 'type_document', 'description'];
    protected $table = 'documents2';
}
