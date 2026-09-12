import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `
  <h1>Welcome to {{ title }}!</h1>
  <p>Hello world</p>
  <a target="_blank" href="https://angular.dev/overview">
    Learn more about Angular
  </a>
  <button (click)="counter.set(counter() - 1)">--</button>
  <span> Counter: {{ counter() }} </span>
  <button (click)="counter.set(counter() + 1)">++</button>
  `,
  styles: []
})
export class AppComponent {
    name = 'Angular';
    counter = signal(0);
}
