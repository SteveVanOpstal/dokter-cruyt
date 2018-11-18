import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {HomeModule} from '../home/home.module';

import {AdminComponent} from './admin.component';

@NgModule({
  imports: [ReactiveFormsModule, HomeModule],
  exports: [AdminComponent],
  declarations: [AdminComponent]
})
export class AdminModule {
}
