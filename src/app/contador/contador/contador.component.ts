import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>Hola mundo</h1>
        <h1>La base es de: {{base}}</h1>

        <button (click)="acumular(+base)">+ {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)">- {{base}}</button>
    `
})
export class ContadorComponent{
    title = 'bases';
    base:number = 5;
    numero:number = 10;
  
    sumar(){
      this.numero += 1;
    }
  
    acumular(valor:number){
      this.numero += valor;
    }
}