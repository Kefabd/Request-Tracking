<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;


class NotificationDemandeTraitee extends Mailable
{
    use Queueable, SerializesModels;

    public $prenom;
    public $nom;
    public $type;

    public function __construct($prenom, $nom,$type)
    {
        $this->prenom = $prenom;
        $this->nom = $nom;
        $this->type=$type;
    }

    public function build()
    {
        return $this->subject('Notification de traitement de demande')->view('notification_demande_traitee');
    }
}
