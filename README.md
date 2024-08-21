# Projet : Application de Gestion de Tâches (To-Do List)

<span><img width="300px" src="https://github.com/FlorianBx/taskList-ang-demo/blob/main/src/assets/prev1.png" />
<img width="300px" src="https://github.com/FlorianBx/taskList-ang-demo/blob/main/src/assets/prev2.png" />
<img width="300px" src="https://github.com/FlorianBx/taskList-ang-demo/blob/main/src/assets/prev3.png" /><span>

## Objectifs

- **Maîtriser les concepts clés d'Angular** : routage, services, injection de dépendances, et formulaires réactifs.
- **Développer une application simple de gestion de tâches** avec des fonctionnalités d'ajout, de modification, et de marquage des tâches comme terminées.

## Fonctionnalités

1. **Liste des tâches**
   - Affiche une liste de tâches avec un bouton pour marquer une tâche comme terminée.
   - Lien vers un formulaire pour ajouter une nouvelle tâche.
   - Lien pour éditer une tâche existante.

2. **Ajout d'une tâche**
   - Utiliser le composant `TaskFormComponent` pour ajouter une nouvelle tâche.
   - Formulaire réactif avec validation (ex. : nom de la tâche requis, minimum 3 caractères).

3. **Modification d'une tâche**
   - Utiliser un composant séparé `TaskEditComponent` pour modifier une tâche existante.
   - Pré-remplir le formulaire avec les informations de la tâche à modifier.

4. ⭐️ Bonus **Suppression d'une tâche (optionnel)**
   - Ajouter une fonctionnalité pour supprimer une tâche de la liste.

## Structure du Projet

Le projet est structuré comme suit :

- **Services** : Créer un service `TaskService` pour gérer la logique métier (ajout, modification, suppression des tâches).
- **Routage** : Configurer le routage pour naviguer entre la liste des tâches, le formulaire d'ajout, et le formulaire de modification.
- **Composants** :
  - `TaskListComponent` : Affiche la liste des tâches.
  - `TaskFormComponent` : Formulaire pour ajouter une nouvelle tâche.
  - `TaskEditComponent` : Formulaire pour modifier une tâche existante.

## Étapes à Suivre

1. **Configurer l'environnement Angular**
   - Créez un nouveau projet Angular : `ng new todo-app`.

2. **Créer le service de gestion des tâches**
   - Créez un service `TaskService` qui contiendra la logique pour gérer les tâches (ajouter, éditer, supprimer).

3. **Configurer le routage**
   - Configurez les routes dans `app-routes.ts` pour les différentes pages (`TaskListComponent`, `TaskFormComponent`, `TaskEditComponent`).

4. **Développer les composants**
   - `TaskListComponent` : Afficher la liste des tâches avec des checkbox pour les marquer comme terminées et un boutton pour les éditer.
   - `TaskFormComponent` : Formulaire réactif pour ajouter une nouvelle tâche.
   - `TaskEditComponent` : Formulaire réactif séparé pour modifier une tâche existante.

5. **Gérer les actions de modification**
   - Dans `TaskEditComponent`, récupérer l'ID de la tâche depuis l'URL.
   - Utiliser `TaskService` pour charger la tâche à éditer et pré-remplir le formulaire.

6. **Tester l'application**
   - Assurez-vous que vous pouvez ajouter des tâches, les modifier, et les marquer comme terminées.
   - Vérifiez que la navigation entre les différentes pages fonctionne correctement.

7. **Extension (optionnel)**
   - Implémentez la suppression des tâches.
   - Ajoutez une fonctionnalité pour filtrer les tâches (par exemple, afficher seulement les tâches non terminées).

## Conseils

- **Utilisez les outils de développement Angular** (CLI, devtools) pour faciliter la création des composants et services.
- **Pensez à bien structurer votre code** : Séparez la logique métier dans les services, et la logique de présentation dans les composants.
- ⭐️ Bonus **Validez vos formulaires** : Assurez-vous que les utilisateurs ne puissent pas soumettre un formulaire incomplet ou invalide.

## Critères de Réussite

- L'application doit être fonctionnelle et respecter les exigences de base.
- Le code doit être propre et bien structuré.
- Les formulaires doivent être réactifs
- ⭐️ Bonus Les formulaires doivent être valider correctement les données avant soumission.
