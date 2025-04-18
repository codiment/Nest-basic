import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
// Fix the floating promise by adding a catch handler
bootstrap().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
