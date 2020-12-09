#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const vault_module_1 = require("./vault.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(vault_module_1.VaultModule);
    await app.listen(3666);
}
bootstrap().catch(err => console.log({ err }));
//# sourceMappingURL=main.js.map