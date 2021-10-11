import { userUpsert } from './user-upsert/user-upsert.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: 'users/inserir',
    component: userUpsert,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class UserRoutingModule {}
