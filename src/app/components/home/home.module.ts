import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { CommonsModule } from '@commons/commons.module';

// Components
import { HomeComponent } from './home/home.component';


const routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})

export class HomeModule { }
