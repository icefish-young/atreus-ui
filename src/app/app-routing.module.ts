import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemContainerComponent } from './item/item-container/item-container.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  { path: "item", component: ItemContainerComponent },
  { path: "summary", component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
