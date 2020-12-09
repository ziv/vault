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
exports.VaultController = void 0;
const common_1 = require("@nestjs/common");
const vault_service_1 = require("./vault.service");
let VaultController = class VaultController {
    constructor(service) {
        this.service = service;
    }
    status() {
        return this.service.status();
    }
    fetch(ns) {
        return this.service.fetch(ns);
    }
    store(ns, vault) {
        return this.service.store(ns, vault);
    }
    flush(ns) {
        return this.service.flush(ns);
    }
};
__decorate([
    common_1.Get('status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VaultController.prototype, "status", null);
__decorate([
    common_1.Get('fetch/:ns'),
    __param(0, common_1.Param('ns')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VaultController.prototype, "fetch", null);
__decorate([
    common_1.Post('store/:ns'),
    __param(0, common_1.Param('ns')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], VaultController.prototype, "store", null);
__decorate([
    common_1.Delete('flush/:ns'),
    __param(0, common_1.Param('ns')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VaultController.prototype, "flush", null);
VaultController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [vault_service_1.VaultService])
], VaultController);
exports.VaultController = VaultController;
//# sourceMappingURL=vault.controller.js.map