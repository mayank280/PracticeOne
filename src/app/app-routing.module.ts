import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServcompComponent } from './servcomp/servcomp.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent

  ,children: [
    {path:':id', component: UserComponent}
  ]
},
  {path:'server', component: ServcompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
