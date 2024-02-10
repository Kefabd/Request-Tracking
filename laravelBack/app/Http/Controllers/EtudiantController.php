<?php

namespace App\Http\Controllers;

use App\Models\Etudiant;
use Illuminate\Http\Request;

class EtudiantController extends Controller
{
    public function getEtudiantByUserId($userId)
    {
        $etudiant = Etudiant::where('user_id', $userId)->with('user')->first();
        if ($etudiant) {
            return response()->json([
                'status' => 200,
                'message' => $etudiant
            ], 200);
        } else {
            
            return response()->json([
                'status' => 404,
                'message' => 'Aucun étudiant trouvé pour cet utilisateur.'
            ], 404);
        }
    }
}
