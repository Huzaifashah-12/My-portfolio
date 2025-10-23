import { Component, signal } from '@angular/core';

import { Portfolio } from "./portfolio/portfolio";

@Component({
  selector: 'app-root',
  imports: [ Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
