import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '@commons/commons.module';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';


const routes = [
  {
    path: '',
    component: SignInComponent,
  },
];

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    CommonsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
