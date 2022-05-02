import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre:"Satan",
      poder:2
    },
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre:"Vegeta",
      poder:10000
    }
  ]
  nuevo:Personaje = {
    nombre: "Trunks",
    poder:0
  }

  agergarNuevoPersonaje(arg:Personaje){
    this.personajes.push(arg);
  }
}
