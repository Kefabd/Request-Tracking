<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Filliere extends Model
{
    use HasFactory;
    protected $table ='fillieres';
    protected $fillable = [
        'libelle',
        'nombre',
         
    ];
    public function groupe()
    {
        return $this->hasMany(Groupe::class);
    }
}
