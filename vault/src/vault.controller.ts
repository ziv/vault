import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { VaultService } from './vault.service';
import { NameSpace, Vault } from '@xpr/vaultier';

@Controller()
export class VaultController {
  constructor(private service: VaultService) {}

  @Get('status')
  status() {
    return this.service.status();
  }

  @Get('fetch/:ns')
  fetch(@Param(':ns') ns: NameSpace) {
    return this.service.fetch(ns);
  }

  @Post('store/:ns')
  store(@Param(':ns') ns: NameSpace, @Body() vault: Vault) {
    return this.service.store(ns, vault);
  }

  @Delete('flush/:ns')
  flush(@Param(':ns') ns: NameSpace) {
    return this.service.flush(ns);
  }
}
