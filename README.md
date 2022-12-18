# Bases

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Instalacion cli

Run `npm install -g @angular/cli` 

## Creacion Componente

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Directivas

sábado, 17 de diciembre de 2022
20:22

```javascript
//For
<li *ngFor="let heroe of heroes">Item1</li>


//If
<div *ngIf="heroeBorrado !== ''">
    <h3>HeroeBorrado</h3>
    <span>{{heroeBorrado}}</span>
</div>


//NG-template

<div *ngIf="heroeBorrado !== ''; else noBorrado">
    <h3>HeroeBorrado:<small>{{heroeBorrado}}</small></h3>
</div>

<ng-template #noBorrado>
    <h3>No ha borrado nada</h3>
</ng-template>
