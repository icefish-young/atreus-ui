import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  UIShellModule,
  // ButtonModule
} from 'carbon-components-angular';
import { SearchModule } from '@carbon/icons-angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UIShellModule,
    SearchModule
  ],
  exports: [
    UIShellModule,
    SearchModule
  ]
})
export class CarbonModule { }
