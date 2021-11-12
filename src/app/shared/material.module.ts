import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatMenuModule } from '@angular/material/menu';

import { MatCardModule } from '@angular/material/card';

const angularMaterialModules = [
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...angularMaterialModules],
  exports: [...angularMaterialModules],
})
export class MaterialModule {}
