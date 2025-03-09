import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  template: `
    <div *ngIf="task">
      <h2>{{ task.title }}</h2>
      <p>{{ task.description }}</p>
      <button (click)="goBack()">Back to Tasks</button>
    </div>
  `
})
export class TaskDetailComponent extends BaseTaskComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    super();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = { id, title: 'Task ' + id, description: 'Description', category: 'Work', status: 'Pending', deadline: 'Tomorrow' };
  }

  goBack() {
    this.router.navigate(['/tasks']);
  }
}
