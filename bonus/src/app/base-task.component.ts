import { Component, Input } from '@angular/core';

interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  deadline: string;
}

@Component({
  selector: 'app-base-task',
  template: ''
})
export class BaseTaskComponent {
  @Input() task!: Task;
}
