"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var item_1 = require('./item');
var item_service_1 = require('./item.service');
var ItemListComponent = (function () {
    function ItemListComponent(itemService) {
        this.itemService = itemService;
        this.newItem = new item_1.Item();
    }
    ItemListComponent.prototype.addItem = function () {
        this.itemService.create(this.newItem);
        this.newItem = new item_1.Item();
    };
    ItemListComponent.prototype.removeItem = function (item) {
        this.itemService.delete(item.id);
    };
    Object.defineProperty(ItemListComponent.prototype, "items", {
        get: function () {
            return this.itemService.getItems();
        },
        enumerable: true,
        configurable: true
    });
    ItemListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-items',
            templateUrl: './item-list.component.html'
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], ItemListComponent);
    return ItemListComponent;
}());
exports.ItemListComponent = ItemListComponent;
//# sourceMappingURL=item-list.component.js.map