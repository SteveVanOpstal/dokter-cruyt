import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppointmentButtonComponent} from './appointment-button/appointment-button.component';
import {CallButtonComponent} from './call-button/call-button.component';
import {PipesModule} from './pipes/pipes.module';
import {RemarksComponent} from './remarks/remarks.component';

@NgModule({
  imports: [PipesModule, BrowserAnimationsModule, MatButtonModule, MatIconModule],
  exports: [CallButtonComponent, AppointmentButtonComponent, RemarksComponent],
  declarations: [CallButtonComponent, AppointmentButtonComponent, RemarksComponent]
})
export class SharedModule {
}
