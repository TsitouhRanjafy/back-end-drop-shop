# BACK END OF [DROP-SHOP](https://github.com/marioralison/Drop_App) RPOJECT

Cette projet est développer avec `Node: v22.19.0` avec `Typescript: v8.28.0` en suivant le **Clean Architecture**

## Arctecture 

### Strcuture du dossier

```
.
├── configuration
├── controllers
├── domain
├── infrastructure
├── interfaces
├── usecases
└── main.ts 
```

- **`domain`**: Contient le *logique métier pure*     
        `ex`: La formule pour calculer les intérêt sur un prêt est la même qu'elle est utilisé sur une feuille de papier ou implementer dans une application.

- **`usecase`**: Contient les *intenstions* des utilisateurs dans le système.     
    `ex`: En tant que banquier, je veux pouvoir simuler le coût d'un prêt immobiliser sur N années.     
    Un seul méthode publique appéllé execute query (`lire`) ou commande (`écrire`) qui intéragit notamment avec des repositories.
    |   `QUERY`    | `COMMAND`    |
    |--------------|--------------|
    | Pas de changement du système     | Changement d'état du système  |
    | Retourne une résultat       | Ne retourne rien  |

- **`infrastructure`** ou **ADAPTERS LEFT**        
    Point de sortie de l'application, permettant qu système de communiquer avec l'exterieur.        
    `ex`: un repostory,  un service de référentiel, un client mail, sms     


- **`interface`** ou **ADAPTERS RIGHT**    
    Ce qui permet à l'utilisateur d'accéder au `usecase`, ce sont nos point d'entrer à l'application        
    `ex`: une route (REST), une commande shell, ...

- **`configuration`**       
    Permet au tout de fonctionner ensemble

### Flow

...

### Philosophie

- Depuis `src`, le sous-dossier ne doit pas plus de 3
- Test les ficihers en stage avec `eslint`
- Test les fichiers avant de pusher avec `jest`

### Git Flow

<img width="400" height="200" src="https://github.com/user-attachments/assets/7f18d77e-1922-4439-8123-118c819f5830"/>

## Développement


### The [database conception](https://drive.google.com/file/d/1hnSGUgrMk2PCUbNxZhBGJkvHQSActJXq/view?usp=drive_link)



