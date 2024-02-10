<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CertificatScolarite extends Model
{
    use HasFactory;
    protected $table ='certificat_de_scolarite';
    protected $fillable = [
        'date',
        'lieu_de_naissance',
        'demande_id',


    ];


    public function demande()
    {
        return $this->belongsTo(Demande::class, 'demande_id');
    }
}
