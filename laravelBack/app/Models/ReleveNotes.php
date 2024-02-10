<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReleveNotes extends Model
{
    use HasFactory;
    protected $table ='releve_de_notes';
    protected $fillable = [
        'niveau',
        'annee',
        'session',
        'demande_id',


    ];


    public function demande()
    {
        return $this->belongsTo(Demande::class, 'demande_id');
    }
}
