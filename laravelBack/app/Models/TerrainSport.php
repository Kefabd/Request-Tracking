<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TerrainSport extends Model
{
    use HasFactory;
    protected $table ='terrain_de_sport';
    protected $fillable = [
        'date',
        'heure_debut',
        'heure_fin',
        'demande_id',


    ];


    public function demande()
    {
        return $this->belongsTo(Demande::class, 'demande_id');
    }
}
