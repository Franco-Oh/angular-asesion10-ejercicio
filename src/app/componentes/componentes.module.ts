import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteC1Component } from './componente-c1/componente-c1.component';
import { ComponenteC2Component } from './componente-c2/componente-c2.component';
import { ComponenteC3Component } from './componente-c3/componente-c3.component';
import { ComponenteC4Component } from './componente-c4/componente-c4.component';



@NgModule({
  declarations: [
    ComponenteC1Component,
    ComponenteC2Component,
    ComponenteC3Component,
    ComponenteC4Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponenteC1Component,
    ComponenteC2Component,
    ComponenteC3Component,
    ComponenteC4Component
  ]
})
export class ComponentesModule { }
