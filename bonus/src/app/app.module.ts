import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'task/:id', component: TaskDetailComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
  declarations: [TaskListComponent, TaskItemComponent, TaskDetailComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [TaskListComponent]
})
export class AppModule {}
