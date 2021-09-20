import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertModalComponent } from './alertModal/alertModal.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertModalComponent],
  exports: [AlertModalComponent],
  entryComponents: [AlertModalComponent]
})
export class SharedModule { }
