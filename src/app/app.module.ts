import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { HttpClientModule } from '@angular/common/http';

import { DomicilioPipe } from './domicilio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TablaUsuariosComponent,
    DomicilioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
