"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultService = void 0;
const common_1 = require("@nestjs/common");
const vaultier_1 = require("@xpr/vaultier");
let VaultService = class VaultService {
    constructor() {
        this.storage = new Map();
    }
    status() {
        const status = [];
        for (const [key, value] of this.storage.entries()) {
            const created = value[vaultier_1.vaultCreatedKey];
            const count = Object.keys(value).length - 1;
            status.push({ key, created, count });
        }
        return status;
    }
    store(ns, vault) {
        this.storage.set(ns, Object.assign(Object.assign({}, vault), { [vaultier_1.vaultCreatedKey]: Date.now().toString() }));
        return true;
    }
    fetch(ns) {
        if (!this.storage.has(ns)) {
            this.store(ns, {});
        }
        return this.storage.get(ns);
    }
    flush(ns) {
        this.storage.delete(ns);
        return true;
    }
    flushAll() {
        this.storage = new Map();
    }
};
VaultService = __decorate([
    common_1.Injectable()
], VaultService);
exports.VaultService = VaultService;
//# sourceMappingURL=vault.service.js.map