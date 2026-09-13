import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  homeMessage = signal('Welcome to your TO-DOs app');
  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key. `)
  }
}
