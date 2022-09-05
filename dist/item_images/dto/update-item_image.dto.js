"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateItemImageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_item_image_dto_1 = require("./create-item_image.dto");
class UpdateItemImageDto extends (0, mapped_types_1.PartialType)(create_item_image_dto_1.CreateItemImageDto) {
}
exports.UpdateItemImageDto = UpdateItemImageDto;
//# sourceMappingURL=update-item_image.dto.js.map