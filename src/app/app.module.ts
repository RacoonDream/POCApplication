import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { UserDetailsComponent } from './user-details/user-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';
@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    EventDetailsComponent
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
