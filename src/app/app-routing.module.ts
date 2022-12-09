import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './components/players/players.component';
import { RegisterComponent } from './components/register/register.component';
import { PlayerComponent } from './components/player/player.component';

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
  },
  {
    path:"player/:id", component:PlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
