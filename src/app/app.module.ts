import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CarbonModule } from '../carbon/carbon.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarbonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
