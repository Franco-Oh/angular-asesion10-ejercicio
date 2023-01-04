import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-c3',
  templateUrl: './componente-c3.component.html',
  styleUrls: ['./componente-c3.component.css']
})
export class ComponenteC3Component implements OnInit {

  nombreTarea!:string;
  descrip!:string;
  listaTarea = [];

  guardarTarea(){
    console.log(this.nombreTarea);
    console.log(this.descrip);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
