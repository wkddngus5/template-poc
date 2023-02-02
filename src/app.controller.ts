import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/templates/:template')
  getTemplate(@Body() body, @Param() param: { template: string }): string {
    return this.appService.getHtml(param.template, body);
  }

  @Get('/api/resumes/:id')
  async getResume(
    @Body() body,
    @Param() param: { id: number },
  ): Promise<string> {
    const resume = await this.appService.getResume(param.id);
    return this.appService.getHtml(resume.template, resume);
  }
}
