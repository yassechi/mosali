import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Authentification } from '../../Services/authentification';

@Component({
  selector: 'app-banner',
  imports: [RouterLink],
  templateUrl: './banner.html',
})
export class Banner implements OnInit {
  private srvAuth = inject(Authentification);
  private router = inject(Router);

  logged = signal(false);
  cmpt = signal(0); // TODO: remove this

  ngOnInit(): void {
    setInterval(() => {
      this.cmpt.set(this.cmpt() + 1);
    this.logged.set(this.srvAuth.isLoggedIn());

    }, 1000);
  }

  login = () => {
    this.router.navigate(['/login']);
  };

  logOut = () => {
    localStorage.removeItem('isLoggedIn');
    this.logged.set(false);
  };
}
