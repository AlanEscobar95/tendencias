import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {jugador} from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  jugadores: any[] = [];
  seleccionarJugador: any = null;
  miVariable:jugador;
  constructor(private httpClient: HttpClient) { 
    this.cargarJugadores();
  }

  private cargarJugadores() {
    this.jugadores = [];
    this.jugadores.push(
      { id: 1, nombre: 'Jonathan', equipo: 'Real Madrid', numCamiseta: 7, numCelular: '0986754567', fchNacimiento: '1995-12-01', paisOrigen: 'Francia', posicion: 'Defensa', peso: 75, altura: 1.80, convocado: true },
      { id: 2, nombre: 'Roberto', equipo: 'Chelsea', numCamiseta: 10, numCelular: '097898765', fchNacimiento: '2000-02-13', paisOrigen: 'España', posicion: 'Delantero', peso: 85, altura: 1.95, convocado: true }
    );
  }
  
  añadirJugador(payload: any){
   this.jugadores.push(payload); 
  }

  actualizarJugador(id:number, payload:any){
    const index = this.jugadores.findIndex(jugador => jugador.id === id );
    this.jugadores[index]=payload;
  }
  
  borrarJugador(id:number){
    const index = this.jugadores.findIndex(jugador => jugador.id === id );
    if(index > -1) {
      this.jugadores.splice(index, 1);
    }
  }

  consultarApiService() {
    return this.httpClient.get('http://localhost:3000/api/v1/students/catalogue');
  }
  crearApiService(item:jugador[]) {
  return this.httpClient.post<jugador[]>(`http://localhost:3000/api/v1/students/catalogue`,item);
  }
  actualizarApiService(id:number,item:jugador[]){
    return this.httpClient.put<jugador[]>(`http://localhost:3000/api/v1/students/catalogue${id}`,item);
  }
  eliminarApiService(id:number){
    return this.httpClient.delete(`http://localhost:3000/api/v1/students/catalogue${id}`);
  }
}

