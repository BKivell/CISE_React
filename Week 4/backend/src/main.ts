import { NestFactory } from '@nestjs/core';
import { ArticlesModule } from './articles/articles.module';

async function bootstrap() {
  const app = await NestFactory.create(ArticlesModule, {
    logger: ['error', 'warn', 'log', 'debug'],
  });
  await app.listen(3000);
  
}
bootstrap();
