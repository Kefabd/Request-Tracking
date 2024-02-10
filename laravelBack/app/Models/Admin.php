<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    protected $table ='admin';
    protected $fillable = [
        'nom',
        'email',
        'mdp',
         
    ];
    public function documents()
    {
        return $this->hasMany(Document::class);
    }
    public function demandes()
    {
        return $this->hasMany(Demande::class);
    }

}
