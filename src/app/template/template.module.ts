import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './switches/switches.component';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { BasicsComponent } from './basics/basics.component';


@NgModule({
  declarations: [
    SwitchesComponent,
    DynamicsComponent,
    BasicsComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
