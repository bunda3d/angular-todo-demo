import { Component, signal } from '@angular/core';
import { Greeting } from '../greeting/greeting';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  homeMessage = signal('Welcome to your TO-DOs app');
}
