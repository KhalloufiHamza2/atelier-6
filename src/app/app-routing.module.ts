import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductTDComponent} from "./add-product-td/add-product-td.component";

const routes: Routes = [
  { path: 'addInvoice', component: AddProductTDComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
