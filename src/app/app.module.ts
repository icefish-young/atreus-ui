import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CarbonlModule } from './carbon/carbon.module';
import { AppComponent } from './app.component';
import { ItemContainerComponent } from './item/item-container/item-container.component';
import { ItemComponent } from './item/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ItemContainerComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarbonlModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
