#!/usr/bin/env node
import { NestFactory } from '@nestjs/core';
import { VaultModule } from './vault.module';

async function bootstrap() {
  const env: string = process.env.VAULT_ENV || 'prod';
  const logger: boolean = env === 'dev';
  const app = await NestFactory.create(VaultModule, { logger });
  await app.listen(3666);
}

bootstrap().catch(err => console.log({ err }));
