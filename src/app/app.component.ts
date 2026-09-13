import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, Header],
  template: `
  <h1>Welcome to {{ title() }}!</h1>
  <p>Hello world</p>
  <a class="ng-link" target="_blank" href="https://angular.dev/overview">
    Learn more about {{ name() }}
  </a>
  <br>
  <h2>Counter:</h2>
  <button (click)="counter.set(counter() - 1)">--</button>
  <span> Counter: {{ counter() }} </span>
  <button (click)="counter.set(counter() + 1)">++</button>
  `,
  styles: []
})
export class AppComponent {
    name = signal('Angular');
    title = signal('Yo!');
    counter = signal(0);
}
