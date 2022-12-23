import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { Router } from '@angular/router';

describe('AppRoutingModule', () => {
  let router: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, RouterTestingModule.withRoutes([])],
    });

    router = TestBed.inject(Router);
  });

  it('should have a route for the home page', () => {
    expect(router.config).toContain({ path: 'home', component: HomeComponent });
    expect(router.config).toContain({ path: '', component: HomeComponent });
  });

  it('should have a route for the players page', () => {
    expect(router.config).toContain({
      path: 'players',
      component: PlayersComponent,
    });
  });

  it('should have a route for the player page', () => {
    expect(router.config).toContain({
      path: 'player/:id',
      component: PlayerComponent,
    });
  });
});
