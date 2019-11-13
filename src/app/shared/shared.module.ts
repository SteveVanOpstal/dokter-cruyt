import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {AppointmentButtonComponent} from './appointment-button/appointment-button.component';
import {CallButtonComponent} from './call-button/call-button.component';
import {LoadImageComponent} from './load-image/load-image.component';
import {PipesModule} from './pipes/pipes.module';
import {RemarksComponent} from './remarks/remarks.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    CallButtonComponent,
    AppointmentButtonComponent,
    RemarksComponent,
    LoadImageComponent,
  ],
  declarations: [
    CallButtonComponent,
    AppointmentButtonComponent,
    RemarksComponent,
    LoadImageComponent,
  ]
})
export class SharedModule {
}
