import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JugadoresService } from 'src/app/jugador/jugadores.service';

@Component({
  selector: 'app-jugador-lista',
  templateUrl: './jugador-lista.component.html',
  styleUrls: ['./jugador-lista.component.css']
})
export class JugadorListaComponent {
 jugadores: any[] = [];
 seleccionarJugador:any;

 constructor(private jugadoresService:JugadoresService, private router: Router){
  this.jugadores = this.jugadoresService.jugadores;
  }

  crearJugador() {
    this.jugadoresService.seleccionarJugador = null;
    this.router.navigate(['jugador']);
  }

  editarJugador(jugador: any) {
    this.jugadoresService.seleccionarJugador = jugador;
    this.router.navigate(['jugador']);
  }

  borrarJugador(id: number) {
    this.jugadoresService.borrarJugador(id);
    console.log(this.jugadoresService.jugadores);
  }

  getAllCountries() {
    console.log('1');
    this.jugadoresService.getAllCountries().subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    );
    console.log('3');
  }
 }

