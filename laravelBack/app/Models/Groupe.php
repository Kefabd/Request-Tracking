<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Groupe extends Model
{
    use HasFactory;
    protected $table ='groupes';
    protected $fillable = [
        'niveau',
        'annee',
        'section_id',
        'filiere_id',
         
    ];
    public function section()
    {
        return $this->belongsTo(Section::class);
    }
    public function filliere()
    {
        return $this->belongsTo(Filliere::class);
    }
    public function etudiants()
    {
        return $this->hasMany(Etudiant::class);
    }
}
