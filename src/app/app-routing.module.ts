import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadorComponent } from './jugador/jugador.component';
import { JugadorListaComponent } from './jugador-lista/jugador-lista/jugador-lista.component';

const routes: Routes = [
  {
    path: '',
    component: JugadorComponent
  },
  {
    path: 'jugador',
    component: JugadorComponent
  },
  {
    path: 'jugador-lista',
    component: JugadorListaComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
