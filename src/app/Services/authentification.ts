import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Authentification {
  private srv = inject(Router);

  isLoggedIn = () : boolean => {
    // Vérifiez si l'utilisateur est connecté ici
    // Par exemple, vous pouvez vérifier si un token d'authentification est présent dans le stockage local ou dans le stockage de session
    if (localStorage.getItem('isLoggedIn') !== null) {
      return true;
    } else {
      this.srv.navigate(['/login']);
    }
    return false
  };
}
