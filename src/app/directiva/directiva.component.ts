import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {


  listaCurso: String [] = ['TypeScrip', 'Javascrip', 'Java', 'C#', 'PHP'];
  constructor() { }

  habilitar: boolean = true;

  setHabilitar(): void {
    this.habilitar =(this.habilitar==true)? false: true;
  }

}
