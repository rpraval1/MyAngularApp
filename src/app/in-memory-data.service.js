"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var items = [
            { id: '1', name: 'Windstorm' },
            { id: '2', name: 'Bombasto' },
            { id: '3', name: 'Magneta' },
            { id: '4', name: 'Tornado' }
        ];
        return { items: items };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map