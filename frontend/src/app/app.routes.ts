import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { BoardComponent } from './pages/board/board';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'board', component: BoardComponent }
];
