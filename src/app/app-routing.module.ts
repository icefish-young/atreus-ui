import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemContainerComponent } from './item/item-container/item-container.component';


const routes: Routes = [
  { path: "item-container", component: ItemContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
