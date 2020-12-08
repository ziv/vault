import { Module } from '@nestjs/common';
import { VaultController } from './vault.controller';
import { VaultService } from './vault.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

const rootPath = join(__dirname, '..', 'vaultage');

@Module({
  imports: [ServeStaticModule.forRoot({ rootPath, serveRoot: '*.html' })],
  controllers: [VaultController],
  providers: [VaultService]
})
export class VaultModule {
}
