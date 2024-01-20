import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() frameworkName: string = '';
  @Output() addNumberEvent = new EventEmitter<number>();

  num: number = 0;

  addNumber() {
    this.num++;
    this.addNumberEvent.emit(this.num);
  }
}
