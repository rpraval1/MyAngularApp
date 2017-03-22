import { Component, OnInit } from '@angular/core';
import {Item} from './item';
import {ItemService} from './item.service';

@Component({
  moduleId: module.id,
  selector: 'my-items',
  templateUrl: './item-list.component.html'
})

export class ItemListComponent{
  newItem: Item = new Item();

  constructor(private itemService: ItemService){}

  addItem() {
    this.itemService.create(this.newItem);
    this.newItem = new Item();
  }

  removeItem(item){
    this.itemService.delete(item.id);
  }

  get items(){
    return this.itemService.getItems();
  }
}
