// material.module.ts
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    // Agrega aquí otros módulos de Angular Material que necesites
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    // Exporta aquí otros módulos de Angular Material que necesites
  ]
})
export class MaterialModule { }
