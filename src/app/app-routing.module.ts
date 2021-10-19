import { HomeComponent } from './layout/home/home.component';
import { UserRoutingModule } from './user/user-routing.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), UserRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
