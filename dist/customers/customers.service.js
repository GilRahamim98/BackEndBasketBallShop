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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customers_entity_1 = require("./entities/customers.entity");
const encrypt_decrypt_1 = require("../encrypt_decrypt");
let CustomersService = class CustomersService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    getCustomers() {
        return this.customerRepository.find();
    }
    async getStreet(_id) {
        const decryptedText = await (0, encrypt_decrypt_1.decrypt)(JSON.parse(_id));
        return await this.customerRepository.findOne({
            select: ['street', 'city'],
            where: [{ id: +decryptedText }],
        });
    }
    async getCustomer(_id) {
        const decryptedText = await (0, encrypt_decrypt_1.decrypt)(JSON.parse(_id));
        return await this.customerRepository.find({
            select: [
                'first_name',
                'last_name',
                'birth_day',
                'user_name',
                'email',
                'phone',
                'street',
                'city',
            ],
            where: [{ id: +decryptedText }],
        });
    }
    async getCustomerByUsername(username) {
        return await this.customerRepository.findOne({
            select: ['id', 'user_name', 'password'],
            where: [{ user_name: username }],
        });
    }
    async createCustomer(createCustomerDto) {
        const username = await this.getCustomerByUsername(createCustomerDto.user_name);
        const email = await this.customerRepository.find({
            where: [{ email: createCustomerDto.email }],
        });
        if (email.length > 0) {
            return { message: 'This email is already in use!' };
        }
        else if (username !== null) {
            return { message: 'This username is already in use!' };
        }
        else {
            const newCustomer = this.customerRepository.create(createCustomerDto);
            this.customerRepository.save(newCustomer);
            const encryptedId = await (0, encrypt_decrypt_1.encrypt)(String(newCustomer.id));
            return { encryptedId };
        }
    }
    async updateCustomer(_id, updateCustomerDto) {
        const id = +(await (0, encrypt_decrypt_1.decrypt)(JSON.parse(_id)));
        return await this.customerRepository.update({ id }, updateCustomerDto);
    }
};
CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customers_entity_1.Customers)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map