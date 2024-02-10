<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;
    protected $table ='documents';
    protected $fillable = [
        'libelle',
        'admin_id',
        'etudiant_id',
         
    ];
    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }
    public function etudiant()
    {
        return $this->belongsTo(Etudiant::class);
    }
}
