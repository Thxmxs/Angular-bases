import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[]=[
    {
      nombre:"Krillin",
      poder:700
    },
    {
      nombre:"Goku",
      poder:15700
    }
  ]

  nuevo :Personaje={
    nombre:'',
    poder:0
  }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo)

    this.personajes=[...this.personajes,{nombre:this.nuevo.nombre,poder:this.nuevo.poder}];
    this.nuevo={nombre:"",poder:0};
  }

}
