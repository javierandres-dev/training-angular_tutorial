import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-tutorial-page',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './tutorial-page.component.html',
  styleUrl: './tutorial-page.component.css',
})
export class TutorialPageComponent {}
