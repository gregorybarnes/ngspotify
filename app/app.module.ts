import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from  './components/about/about.component';
import { SearchComponent } from  './components/search/search.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
