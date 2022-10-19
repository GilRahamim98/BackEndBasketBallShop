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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemImagesController = void 0;
const common_1 = require("@nestjs/common");
const item_images_service_1 = require("./item_images.service");
let ItemImagesController = class ItemImagesController {
    constructor(itemImagesService) {
        this.itemImagesService = itemImagesService;
    }
    findAll() {
        return this.itemImagesService.getItems();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItemImagesController.prototype, "findAll", null);
ItemImagesController = __decorate([
    (0, common_1.Controller)('item-images'),
    __metadata("design:paramtypes", [item_images_service_1.ItemImagesService])
], ItemImagesController);
exports.ItemImagesController = ItemImagesController;
//# sourceMappingURL=item_images.controller.js.map