import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CatchesRoutingModule } from '@app/catches/catches-routing.module';
import { LayoutComponent } from '@app/catches/layout.component';
import { ListComponent } from '@app/catches/list.component';
import { AddEditComponent } from '@app/catches/add-edit.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CatchesRoutingModule
  ]
})
export class CatchesModule { }