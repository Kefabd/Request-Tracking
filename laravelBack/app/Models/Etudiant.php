<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etudiant extends  Model
{
    use HasFactory;
    protected $table ='etudiants';
    protected $fillable = [
        'cne',
        'code_apogee',
        'image',
        'tel',
        'datenais',
        'user_id'
    ];
 
    public function demandes()
    {
        return $this->hasMany(Demande::class);
    }

    public function user(){
        return $this -> belongsTo(User::class, 'user_id');
    }
}
