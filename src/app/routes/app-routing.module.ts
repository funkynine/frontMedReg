import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { URL } from '../consts/url';
import { HOME } from './home.route';
import { SIGN_IN } from './sign-in.route';

const ROUTES: Routes = [
  HOME,
  SIGN_IN,
  { path: '', redirectTo: URL.HOME, pathMatch: 'full' },
  { path: '**', redirectTo: URL.HOME },
];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      onSameUrlNavigation: 'ignore',
      preloadingStrategy: PreloadAllModules,
      enableTracing: false,
    }),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
