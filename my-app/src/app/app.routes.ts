import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TutorialPageComponent } from './components/tutorial-page/tutorial-page.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'home Page',
    component: HomePageComponent,
  },
  {
    path: 'tutorial',
    title: 'tutorial Page',
    component: TutorialPageComponent,
  },
];
