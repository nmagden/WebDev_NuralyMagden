import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <app-task-item *ngFor="let task of tasks" [task]="task" (taskCompleted)="updateStatus($event)"></app-task-item>
  `
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Work Task', description: 'Do work', category: 'Work', status: 'Pending', deadline: 'Tomorrow' },
    { id: 2, title: 'Study Task', description: 'Study hard', category: 'Study', status: 'Pending', deadline: 'Next week' }
  ];

  updateStatus(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.status = 'Completed';
  }
}
