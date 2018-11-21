import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import {HomeModule} from '../home/home.module';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';

@NgModule({
  imports: [AdminRoutingModule, HomeModule, ReactiveFormsModule, MatInputModule, CommonModule],
  declarations: [AdminComponent]
})
export class AdminModule {
}
