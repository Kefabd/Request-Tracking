<?php

namespace App\Http\Controllers;

use App\Models\AttestationBourse;
use App\Models\CertificatScolarite;
use App\Models\ConventionStage;
use Illuminate\Http\Request;
use App\Models\Demande;
use App\Models\Etudiant;
use App\Models\User;
use Faker\Core\Number;

class ApiController extends Controller
{
    // public function getData()
    // {
    //     // Replace this with your actual data retrieval logic
    //     $data = [
    //         ['id' => 1, 'name' => 'Item 1'],
    //         ['id' => 2, 'name' => 'Item 2'],
    //         ['id' => 3, 'name' => 'Item 3'],
    //     ];

    //     return response()->json($data);
    // }


    public function getDemandes()
    {
        return response()->json(Demande::orderBy('annee', 'desc')->get(), 200);
    }

    public function getFiltresDemandes(Request $request, string $state)
    {
        $demandes = Demande::where('etat', $state)
            ->orderBy('annee', 'desc')
            ->get();
        return response()->json($demandes, 200);
    }

    public function getEtudiant(Request $request)
    {
        $id = $request->input('id');
        $etudiant = Etudiant::where('id', $id)->get();
        $withUser = Etudiant::with('user')->find($id)->user;
        $etudiantAvecUser = $etudiant->map(function ($item, $key) use ($withUser) {
            $item['nom'] =  $withUser->nom;
            $item['prenom'] =  $withUser->prenom;
            return $item;
        });
        // $name = User::find($etudiant -> user_id);
        // $user = Etudiant::with('user')->find($id, ['nom', 'prenom']);
        return response()->json($etudiantAvecUser, 200);
    }

    public function getInfosType(Request $request, string $type, int $id)
    {
        //$classe = $type::find($id);
        $class = resolve("App\\Models\\$type");
        $data = $class->where('demande_id', $id)->get();
        $data->transform(function ($item) {
            return collect($item)->except(['created_at', 'deleted_at', 'updated_at', 'demande_id', 'id'])->all();
        });
        return response()->json($data, 200);
    }
    //Dash de l'etudiant
    public function getDemandesEtudiant(int $etudiantId)
    {
        $demandes = Demande::where('etudiant_id', $etudiantId)
        ->orderBy('annee', 'desc')
        ->get();
        return response()->json($demandes, 200);
    }

    public function getFiltresDemandesEtudiant(Request $request, int $etudiantId, string $state)
    {
        $demandes = Demande::where('etudiant_id', $etudiantId)
            ->where('etat', $state)
            ->orderBy('annee', 'desc')
            ->get();

        return response()->json($demandes, 200);
    }
    public function getEtudiantIdFromUserId(int $userId)
    {
        $etudiantId = Etudiant::where('user_id', $userId)->value('id');

        if ($etudiantId) {
            return response()->json(['etudiant_id' => $etudiantId], 200);
        } else {
            return response()->json(['message' => 'Étudiant non trouvé'], 404);
        }
    }
}
