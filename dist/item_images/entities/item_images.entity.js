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
exports.Item_Images = void 0;
const items_entity_1 = require("../../items/entities/items.entity");
const typeorm_1 = require("typeorm");
let Item_Images = class Item_Images {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Item_Images.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => items_entity_1.Items, (item) => item.images),
    __metadata("design:type", items_entity_1.Items)
], Item_Images.prototype, "item_", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 300 }),
    __metadata("design:type", String)
], Item_Images.prototype, "image_src", void 0);
Item_Images = __decorate([
    (0, typeorm_1.Entity)()
], Item_Images);
exports.Item_Images = Item_Images;
//# sourceMappingURL=item_images.entity.js.map