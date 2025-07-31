import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Banner } from "./Shared/banner/banner";
import { Footer } from "./Shared/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Banner, Footer],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mosali');
}
