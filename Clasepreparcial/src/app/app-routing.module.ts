import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'episodios', component: EpisodiosComponent },
  { path: 'personajes', component: PersonajesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
