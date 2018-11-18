import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {IconService} from './services/icon.service';
import {BaseUrlInterceptor} from './shared/interceptors/base-url.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule, HttpClientModule],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true}, IconService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
