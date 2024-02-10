<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demande extends Model
{
    use HasFactory;
    protected $table ='demandes';
    protected $fillable = [
        'etat',
        'type_document',
        'description',
        'niveau',
        'filiere',
        'annee',
        'etudiant_id',
    ];
    protected static function booted()
    {
        static::creating(function ($demande) {
            $demande->etat = $demande->etat ?? 'En Cours';
            $demande->annee = $demande->annee ?? '2024-01-16';
        });
    }
    public static function getTypeDocumentOptions()
    {
        return [
            'Relevé De Notes' => 'releve_de_notes',
            'Attestation De Bourse' => 'attestation_de_bourse',
            'Certificat De Scolarite' => 'certificat_de_scolarite',
            'Convention De Stage' => 'convention_de_stage',
            'Terrain De Sport' => 'terrain_de_sport',
        ];
    }
    public function getTableForTypeDocument()
    {
        $typeDocumentOptions = self::getTypeDocumentOptions();
        $currentTypeDocument = $this->attributes['type_document'];

        if (isset($typeDocumentOptions[$currentTypeDocument])) {
            return $typeDocumentOptions[$currentTypeDocument];
        }
        return null;
    }


    public function etudiant()
    {
        return $this->belongsTo(Etudiant::class);
    }
    public function documentSpecificRelationship()
{
    $specificTable = $this->getTableForTypeDocument();
    // $specificModelClass = ucfirst(camel_case($specificTable));

    // return $this->belongsTo("App\Models\\$specificModelClass", 'demande_id');
}



}
