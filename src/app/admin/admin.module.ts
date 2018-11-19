import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {HomeModule} from '../home/home.module';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';

@NgModule({
  imports: [AdminRoutingModule, ReactiveFormsModule, HomeModule],
  declarations: [AdminComponent]
})
export class AdminModule {
}
