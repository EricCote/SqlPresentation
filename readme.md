# Lab securité

1. Activez le mode SQL Login dans les propriétés SQL
2. Redémmarrez le service

3. créez un login SQL nommé 'Web' avec un mot de passe.
   Assurez-vous de n'avoir jamais besoin de changer
   le mot de passe.

4. Testez le login Web en vous connectant avec.
   validez que l'on peut se connecter sur l'instance SQL,
   mais que l'on a accès à aucune BD.

5. Dans AdventureWorks2019, créez un user nommé 'Web', associé au
   login 'Web'

6. Créez un role nommé 'ventes' (owner DBO).

7. Ajoutez le user 'web' dans le role 'ventes'.

8. Ajoutez à 'ventes' les permissions sur le schéma Sales en lecture
   seulement (SELECT)

9. Validez que l'usager web a le droit de faire un select sur 'Sales.SalesPerson', mais n'a pas le droit de faire un select
   sur 'production.product'
