import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Mail } from './dto/mail.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async sendEmail(@Body() data: Mail) {
    await this.appService.sendWelcomeEmail(data);
  }
}
