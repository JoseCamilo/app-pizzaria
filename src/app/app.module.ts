import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { CardapioComponent } from './cardapio/cardapio.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardapioComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
