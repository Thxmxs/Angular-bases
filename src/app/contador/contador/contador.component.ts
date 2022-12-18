import {Component} from '@angular/core'

@Component({
    selector:'app-contador',
    template:`
        <h1>{{titulo}}</h1>
        <h3>La base es : <strong>{{base}}</strong></h3>

        <button (click)="sumar(base)">+1</button>

        <span>{{numero}}</span>

        <button (click)="restar(base)">-1</button>
        
    `
})

export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    sumar(numeroSuma : number = 1){
      this.numero += numeroSuma;
    }
  
    restar(numeroResta : number = 1){
      this.numero -= numeroResta;
    }

}