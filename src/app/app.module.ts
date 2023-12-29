import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';

import { ServiceService } from './service.service';




@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    SearchComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
