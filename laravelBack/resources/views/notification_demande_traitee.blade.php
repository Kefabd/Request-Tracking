<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notification de traitement de demande</title>
</head>
<body>
    <p>Bonjour {{ $prenom }} {{ $nom }},</p>

    <p>Votre demande concernant {{$type}} a été traitée avec succès. Vous pouvez maintenant récupérer votre document à l'administration de l'établissement.</p>

    <p>Merci pour votre soumission et n'hésitez pas à nous contacter si vous avez des questions.</p>

    <p>Cordialement,<br>
    ENSAM-CASA</p>
</body>
</html>
