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
  homeMessage = signal("While you're here why not click some counter buttons? ");
  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key. `)
  }
}
