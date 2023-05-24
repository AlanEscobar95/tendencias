import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { JugadorComponent } from './jugador/jugador.component';
import { JugadorListaComponent } from './jugador-lista/jugador-lista/jugador-lista.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

//Primeng Imports
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from "primeng/table";
import {PanelModule} from "primeng/panel";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JugadorComponent,
    JugadorListaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    PanelModule,
    TableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

