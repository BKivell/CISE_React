import { Controller, Get } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article, ArticleDocument } from './articles.model';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }
}