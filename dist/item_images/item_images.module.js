"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemImagesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const item_images_service_1 = require("./item_images.service");
const item_images_controller_1 = require("./item_images.controller");
const item_images_entity_1 = require("./entities/item_images.entity");
let ItemImagesModule = class ItemImagesModule {
};
ItemImagesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([item_images_entity_1.Item_Images])],
        controllers: [item_images_controller_1.ItemImagesController],
        providers: [item_images_service_1.ItemImagesService],
    })
], ItemImagesModule);
exports.ItemImagesModule = ItemImagesModule;
//# sourceMappingURL=item_images.module.js.map