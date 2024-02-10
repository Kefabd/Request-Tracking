<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeDemande extends Model
{
    use HasFactory;
    protected $table ='type_demandes';
    protected $fillable = [
        'libelle',
         
    ];
    public function demande()
    {
        return $this->hasMany(Demande::class);
    }
}
