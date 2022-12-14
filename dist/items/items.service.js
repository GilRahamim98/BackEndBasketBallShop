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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const items_entity_1 = require("./entities/items.entity");
let ItemsService = class ItemsService {
    constructor(itemsRepository) {
        this.itemsRepository = itemsRepository;
    }
    async getItems() {
        return await this.itemsRepository.find({
            relations: ['images'],
        });
    }
    async getItemsWithSearch(searchValue) {
        const searchValueCapitalize = searchValue.replace('"', "").charAt(0).toUpperCase() + searchValue.replace('"', "").slice(1).replace('"', "");
        return await this.itemsRepository.find({
            where: [{ item_name: (0, typeorm_2.Like)(`%${searchValue}%`) }, { description: (0, typeorm_2.Like)(`%${searchValue}%`) }, { item_name: (0, typeorm_2.Like)(`%${searchValueCapitalize}%`) }, { description: (0, typeorm_2.Like)(`%${searchValueCapitalize}%`) }],
            relations: ['images'],
        });
    }
    async updateQuantity(id, amount) {
        const currentItem = await this.itemsRepository.findOne({ where: [{ id }] });
        currentItem.units_in_stock = currentItem.units_in_stock - amount;
        return await this.itemsRepository.save(currentItem);
    }
    async getItemByCategory(_id) {
        return await this.itemsRepository.find({
            where: [{ category_id: _id }],
            relations: ['images'],
        });
    }
    async getItem(_id) {
        const item = await this.itemsRepository.findOne({
            where: { id: _id },
            relations: ['images'],
        });
        return item;
    }
};
ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(items_entity_1.Items)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map