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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const customers_service_1 = require("./customers/customers.service");
const bcrypt = require("bcrypt");
const encrypt_decrypt_1 = require("./encrypt_decrypt");
const saltOrRounds = 10;
let AppService = class AppService {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async validateUser(username, pass) {
        const user = await this.customerService.getCustomerByUsername(username);
        if (user && (await bcrypt.compare(pass, user.password))) {
            const encryptedId = await (0, encrypt_decrypt_1.encrypt)(String(user.id));
            return { encryptedId };
        }
        return { message: 'Password or Username are not correct!' };
    }
    async registerUser(first_name, last_name, user_name, birth_day, email, phone, city, register_date, street, password) {
        return this.customerService.createCustomer({
            first_name,
            last_name,
            birth_day,
            user_name,
            email,
            phone,
            street,
            city,
            register_date,
            password: await bcrypt.hash(password, saltOrRounds),
        });
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [customers_service_1.CustomersService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map