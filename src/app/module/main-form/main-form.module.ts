import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainFormRoutingModule } from './main-form-routing.module';
import { MainFormComponent } from './main-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    MainFormComponent
  ],
  imports: [
    CommonModule,
    MainFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MainFormModule { }
