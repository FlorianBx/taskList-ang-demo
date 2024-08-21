import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'add', loadComponent: () => import('./components/task-form/task-form.component').then((m) => m.TaskFormComponent )},
  { path: 'edit/:id', loadComponent: () => import('./components/task-form-edit/task-form-edit.component').then((m) => m.TaskFormEditComponent )},
];
