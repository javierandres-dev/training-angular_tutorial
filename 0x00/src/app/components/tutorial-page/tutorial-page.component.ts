import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-tutorial-page',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './tutorial-page.component.html',
  styleUrl: './tutorial-page.component.css',
})
export class TutorialPageComponent {
  city: string = 'New York';

  isLoggedIn: boolean = false;

  frameworks: string[] = ['angular', 'react', 'svelte', 'vue'];
  students: any[] = [
    { id: 0, name: 'Huey' },
    { id: 1, name: 'Dewey' },
    { id: 2, name: 'Louie' },
  ];

  isEditable: boolean = true;

  handleClick() {
    console.log('handle click works');
  }

  handleMouseover() {
    console.log('mouseover works');
  }

  myEmployee: Employee = {
    id: '1',
    firstName: 'Anne',
    lastName: 'Doe',
  };
}
