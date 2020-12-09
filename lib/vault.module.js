"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultModule = void 0;
const common_1 = require("@nestjs/common");
const vault_controller_1 = require("./vault.controller");
const vault_service_1 = require("./vault.service");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const rootPath = path_1.join(__dirname, '..', 'vaultage');
let VaultModule = class VaultModule {
};
VaultModule = __decorate([
    common_1.Module({
        imports: [serve_static_1.ServeStaticModule.forRoot({ rootPath, serveRoot: '*.html' })],
        controllers: [vault_controller_1.VaultController],
        providers: [vault_service_1.VaultService]
    })
], VaultModule);
exports.VaultModule = VaultModule;
//# sourceMappingURL=vault.module.js.map