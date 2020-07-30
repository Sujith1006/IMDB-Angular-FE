import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent} from './app.component';
import { FormsModule } from '@angular/forms';
import { MaincComponent } from './Components/mainc/mainc.component';
import { ImdbhomeComponent } from './Components/imdbhome/imdbhome.component'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MaincComponent,
    ImdbhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
