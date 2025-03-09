import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  template: `
    <div (click)="navigateToDetail()">
      <h3>{{ task.title }}</h3>
      <p>{{ task.category }} - {{ task.status }}</p>
      <button (click)="markCompleted($event)">Mark as Completed</button>
    </div>
  `
})
export class TaskItemComponent extends BaseTaskComponent {
  @Output() taskCompleted = new EventEmitter<number>();

  navigateToDetail() {
    window.location.href = `/task/${this.task.id}`;
  }

  markCompleted(event: Event) {
    event.stopPropagation();
    this.task.status = 'Completed';
    this.taskCompleted.emit(this.task.id);
  }
}
