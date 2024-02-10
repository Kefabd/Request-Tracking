<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PHPUnit\Framework\Attributes\Group;

class Section extends Model
{
    use HasFactory;
    protected $table ='sections';
    protected $fillable = [
        'libelle',
        'nombre',
         
    ];
    public function groupe()
    {
        return $this->hasMany(Group::class);
    }
    

}
