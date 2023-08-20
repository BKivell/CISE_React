import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { Article, ArticleSchema } from './articles.model';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => {
        const mongooseOptions: MongooseModuleOptions = {
          uri: process.env.MONGODB_URI,
        };
        return mongooseOptions;
      },
    }),
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule implements OnModuleInit {
  async onModuleInit() {
    try {
      await MongooseModule.forRootAsync({ useFactory: () => ({ uri: process.env.MONGODB_URI }) });

      console.log('Mongoose connected successfully.');
    } catch (error) {
      console.error('Mongoose connection error:', error);
    }
  }
}
