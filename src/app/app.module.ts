import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './footer/directive/directive.component';
import { PromountComponent } from './promount/promount.component';
import { Main0Component } from './main0/main0.component';
import { PipesComponent } from './pipes/pipes.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent ,
    HeaderComponent,
    SearchComponent,
    DirectiveComponent,
    PromountComponent,
    Main0Component,
    PipesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
