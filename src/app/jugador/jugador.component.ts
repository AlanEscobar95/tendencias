import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JugadoresService } from './jugadores.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})

export class JugadorComponent {
  name: string = '';
  age: number = 0;
  birthdate: Date = new Date();
  state: boolean = false;

  form: FormGroup;//Reactive Form

  constructor(private formBuilder: FormBuilder, private jugadoresService: JugadoresService) {
    if (this.jugadoresService.seleccionarJugador) {
      const jugadorSeleccionado = this.jugadoresService.seleccionarJugador;
      this.form = formBuilder.group({
        id: [jugadorSeleccionado.id],
        nombre: [jugadorSeleccionado.nombre, [Validators.required, Validators.minLength(3)]],
        equipo: [jugadorSeleccionado.equipo, [Validators.required, Validators.minLength(3)]],
        numCamiseta: [jugadorSeleccionado.numCamiseta, [Validators.required, Validators.min(1)]],
        numCelular: [jugadorSeleccionado.numCelular, [Validators.required]],
        fchNacimiento: [jugadorSeleccionado.fchNacimiento],
        paisOrigen: [jugadorSeleccionado.paisOrigen, [Validators.required, Validators.minLength(3)]],
        posicion: [jugadorSeleccionado.posicion, [Validators.required, Validators.minLength(5)]],
        peso: [jugadorSeleccionado.peso, [Validators.required, Validators.minLength(3)]],
        altura: [jugadorSeleccionado.altura, [Validators.required, Validators.minLength(3)]],
        convocado: [jugadorSeleccionado.convocado, []]
      });
    } else {
      this.form = formBuilder.group({
        id: [0],
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        equipo: ['', [Validators.required, Validators.minLength(3)]],
        numCamiseta: [0, [Validators.required, Validators.min(1)]],
        numCelular: [0, [Validators.required]],
        fchNacimiento: [new Date()],
        paisOrigen: ['', [Validators.required, Validators.minLength(3)]],
        posicion: ['', [Validators.required, Validators.minLength(5)]],
        peso: [0, [Validators.required, Validators.min(3)]],
        altura: [0, [Validators.required, Validators.min(3)]],
        convocado: [false, []]
      });
    }
  }
  

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      alert('Guardado');
    } else {
      alert('Formulario No Valido');
    }
  }

  añadirJugador(){
    this.jugadoresService.añadirJugador(this.form.value);
    console.log(this.jugadoresService.jugadores);
  }

  actualizarJugador() {
    this.jugadoresService.actualizarJugador(this.idField.value, this.form.value);
    console.log(this.jugadoresService.jugadores);
  }

  validateForm() {
    if (this.name === '' && this.name.length <= 3) {

    }
  }
  get idField() {
    return this.form.controls['id'];
  }
  
}
