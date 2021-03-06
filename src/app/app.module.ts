import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {IconService} from './services/icon.service';
import {BaseUrlInterceptor} from './shared/interceptors/base-url.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'dc'}), BrowserAnimationsModule, HomeModule, HttpClientModule, AppRoutingModule],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true}, IconService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
