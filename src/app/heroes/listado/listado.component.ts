import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ["Ironman","Spiderman","Hulk","Black Panter","Deadpool"]
  heroeDeleted:string = "";

  borrarHeroe(){
    //this.heroes.splice(this.heroes.length,1," ");
    this.heroeDeleted = this.heroes.pop() || "";
  }
}
