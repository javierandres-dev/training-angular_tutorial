import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TutorialPageComponent } from './components/tutorial-page/tutorial-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home Page',
    component: HomePageComponent,
  },
  {
    path: 'tutorial',
    title: 'Tutorial Page',
    component: TutorialPageComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', title: '404 Page', component: NotFoundPageComponent },
];
