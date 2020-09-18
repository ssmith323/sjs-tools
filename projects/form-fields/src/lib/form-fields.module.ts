import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { CSSFramework } from './css-framework';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { SubmitFormDirective } from './submit/submit-form.directive';
import { SubmitComponent } from './submit/submit.component';

export const lib = CSSFramework.MATERIAL;
const components = [
  InputComponent,
  SelectComponent,
  DatepickerComponent,
  SubmitComponent,
];

@NgModule({
  declarations: [components, SubmitFormDirective],
  exports: [ReactiveFormsModule, components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
})
export class FormFieldsModule {}
