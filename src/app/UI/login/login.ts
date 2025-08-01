import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
})
export default class Login {

  private srvRouter = inject(Router)

  login=()=>{
    // localStorage.setItem('isLoggedIn', 'true');
    // this.srvRouter.navigate(['/banner']);
    // this.srvRouter.navigate(['/home']); 
    localStorage.setItem('isLoggedIn', 'true');
    
  }

}
