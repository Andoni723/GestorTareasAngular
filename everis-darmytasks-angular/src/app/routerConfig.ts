import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';

export const appRoutes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: '/listaTareas' },
{ path: 'listaTareas', component: TaskListComponent}
];

export default appRoutes;