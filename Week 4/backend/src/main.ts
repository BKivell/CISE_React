import { NestFactory } from '@nestjs/core';
import { ArticlesModule } from './articles.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(ArticlesModule, {
    logger: ['error', 'warn', 'log', 'debug'],
  });
  await app.listen(3000);

  app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }));
  
}
bootstrap();
