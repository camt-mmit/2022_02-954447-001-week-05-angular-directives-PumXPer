import { Routes } from '@angular/router';
import { TryOneComponent } from './app/try-one/try-one.component';
import { TryTwoComponent } from './app/try-two/try-two.component';
import { TryThreeComponent } from './app/try-three/try-three.component';
import { TryFinalComponent } from './app/try-final/try-final.component';
import { AssignmentComponent } from './app/assignment/assignment.component';

export const routes: Routes = [
  { path: '', redirectTo: 'try-one', pathMatch: 'full' },
  { path: 'try-one', component: TryOneComponent },
  { path: 'try-two', component: TryTwoComponent },
  { path: 'try-three', component: TryThreeComponent },
  { path: 'try-final', component: TryFinalComponent },
  { path: 'assignment', component: AssignmentComponent}
];
