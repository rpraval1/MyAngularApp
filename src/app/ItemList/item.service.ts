import { Injectable }    from '@angular/core';

import {Item} from './item';

@Injectable()
export class ItemService {

  items: Item[] = [];
  lastId: number = 0;

  constructor(){}
  getItems(): Item[] {
    return this.items
  }

  getItem(id: number): Item {
    return this.items
      .filter(item => item.id === id)
      .pop();
  }

  create(item: Item): ItemService {
    if(!item.id) {
      item.id = ++this.lastId;
    }
    this.items.push(item);
    return this;
  }

  delete(id: number): ItemService {
    this.items = this.items.filter(item => item.id !== id);
    return this;
  }

  update(id: number, values: Object ={}): Item {
    let item = this.getItem(id);
    if(!item) {
      return null;
    }
    Object.assign(item,values);
    return item;
  }

}
