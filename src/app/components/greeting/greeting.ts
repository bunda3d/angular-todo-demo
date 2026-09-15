import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css',
})
export class Greeting {
  message = input('Default TO DO greeting: ');
}
