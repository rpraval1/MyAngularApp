import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {Item} from '../myKitchen/item';
import {ItemService} from '../myKitchen/item.service';

@Component({
  moduleId: module.id,
  selector: 'item-detail',
  templateUrl: './item-detail.component.html'
})

export class ItemDetailComponent implements OnInit {
  item: Item;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.itemService.getItem(+params['id']))
      .subscribe(item => this.item = item);
  }

  save(): void {
    this.itemService.update(this.item)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
