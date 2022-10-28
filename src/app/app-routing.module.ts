import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"home", component:HomeComponent
  },
  {
    path:"", component:HomeComponent
  },
  {
    path:"players", component:PlayersComponent
  },
  {
    path:"register", component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
