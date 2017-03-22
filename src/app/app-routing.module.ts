import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './myKitchenItemList/item-list.component';
import { MyKitchenComponent } from './myKitchen/my-kitchen.component';
import { ItemDetailComponent } from './myKitchenItemList/item-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: MyKitchenComponent
  },
  {
    path: 'itemList',
    component: ItemListComponent
  },
  {
    path: 'detail/:id',
    component: ItemDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
