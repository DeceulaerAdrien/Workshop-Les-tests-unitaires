## Exercice Bonus

> Cet exercice est une mise en situatiion. Nous vous demandons de réfléchir aux TDD à réaliser pour s'assurer du bon fonctionnement de cette page.
> Vous pouvez réaliser l'exercice en pseudocode ou via Mocha/Chai. Prenez le temps de bien cerner les demandes et de penser vos tests efficacement.

Votre chef de projet vous confie la réalisation d'une page de facturation.

Les contraintes suivantes sont à prendre en compte :
**Technologies :**
- Technologie HTML5, CSS3/SASS, JavaScript
- La page doit être accessible sur Pc, tablette et smartphone
- La base de données des faite avec MongoDB

**Fonctionnalités :**
- On doit pouvoir créer et afficher une facture 
- La facture doit avoir un numéro unique. Ce numéro doit suivre celui de la facture précédente
- la date d'émission de la facture doit être affichée automatiquement. Elle correspond à la date du jour de la création et ne peux être modifiée
- On attribue la facture à un client en écrivant son nom ou son numéro de client. Le reste des informations apparait automatiquement
- Chaque ligne de la facture correspond à un article. On entre le numéro d'article ce qui affiche le libellé et le prix unitaire dans les colones dédiées. Il faut ensuite entrer la quantité et une réduction éventuelle. Le montant total par article est affiché dans une colone dédiée. Le Taux de TVA de l'article s'affiche également après avoir entrer le numéro de l'article.
- Le total de la facture se calcul automatique à chaque ajout de ligne
- La TVA se calcul à la fin de la création de la facture au même titre que les réductions éventuelles 
- Les frais de transport, emballage, sont calculés après avoir ajouté toutes les lignes d'articles
- La facture doit être enregistrée dans une base de donnée
- On doit envoyer la facture par mail au client

**Contenu :**
- La page doit afficher les coordonnées de la société "XYZ", "12 rue des Alliés 6000 Charleroi", numéro de TVA "BE 0242.654.724", "téléphone : 071/12.57.35 mail : info@xyz.be", compte en banque "BE75 1576 8512 4547" 
- La mention FACTURE doit apparaitre sur le document
- La date de la facture
- Le numéro de facture
- On doit afficher les coordonnées du client
- Un tableau reprenant les dfférentes lignes de commande et formatté comme suit : 
| N° ligne | N° article | Libellé | Prix unit | Quantité | Remise | Prix tot | TVA |
|----------|------------|---------|-----------|----------|--------|----------|-----|
|          |            |         |           |          |        |          |     |
- Délai de paiement
- Total Htva de la facture
- Total TVAC de la facture
- Les totaux des différtents taux de tva
- Les frais de port
- Les remises, rabais, ristournes