import { NestFactory } from '@nestjs/core';
import { VaultModule } from './vault.module';

async function bootstrap() {
  const app = await NestFactory.create(VaultModule);
  await app.listen(3666);
}
bootstrap().catch(err => console.log({ err }));
