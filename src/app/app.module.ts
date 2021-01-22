import { PublicTransportSearchModule } from './public-transport-search/public-transport-search.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PublicTransportSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
