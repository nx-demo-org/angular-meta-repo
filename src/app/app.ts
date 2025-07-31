import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { examplePublishableLibrary } from '@nx-demo-org/example-javascript-library';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal(examplePublishableLibrary());
}
