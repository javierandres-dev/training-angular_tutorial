import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- <p>navigation works!</p> -->
    <!-- <nav>
      <a href="/home">home</a>
      |
      <a href="/tutorial">tutorial</a>
    </nav> -->
    <nav>
      <a routerLink="/home">home</a>
      |
      <a routerLink="/tutorial">tutorial</a>
    </nav>
  `,
  styles: `nav { text-align: center }`,
})
export class NavigationComponent {}
