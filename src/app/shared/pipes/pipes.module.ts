import {NgModule} from '@angular/core';
import {TelephonePipe} from './telephone.pipe';

@NgModule({exports: [TelephonePipe], declarations: [TelephonePipe]})
export class PipesModule {
}
