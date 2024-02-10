<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConventionStage extends Model
{
    use HasFactory;
    protected $table ='convention_de_stage';
    protected $fillable = [
        'societe',
        'date_debut',
        'date_fin',
        'demande_id',


    ];


    public function demande()
    {
        return $this->belongsTo(Demande::class, 'demande_id');
    }
}
