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
var ItemService = (function () {
    function ItemService() {
        this.items = [];
        this.lastId = 0;
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items
            .filter(function (item) { return item.id === id; })
            .pop();
    };
    ItemService.prototype.create = function (item) {
        if (!item.id) {
            item.id = ++this.lastId;
        }
        this.items.push(item);
        return this;
    };
    ItemService.prototype.delete = function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
        return this;
    };
    ItemService.prototype.update = function (id, values) {
        if (values === void 0) { values = {}; }
        var item = this.getItem(id);
        if (!item) {
            return null;
        }
        Object.assign(item, values);
        return item;
    };
    ItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map