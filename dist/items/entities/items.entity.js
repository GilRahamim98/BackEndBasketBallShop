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
exports.Items = void 0;
const typeorm_1 = require("typeorm");
let Items = class Items {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Items.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 45 }),
    __metadata("design:type", String)
], Items.prototype, "item_name", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Items.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 300 }),
    __metadata("design:type", String)
], Items.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], Items.prototype, "unit_price", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint'),
    __metadata("design:type", Number)
], Items.prototype, "units_in_stock", void 0);
Items = __decorate([
    (0, typeorm_1.Entity)()
], Items);
exports.Items = Items;
//# sourceMappingURL=items.entity.js.map