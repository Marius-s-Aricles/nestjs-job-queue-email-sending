import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { Mail } from './dto/mail.interface';

@Injectable()
export class AppService {
  constructor(@InjectQueue('mail') private readonly emailQueue: Queue) {}

  async sendWelcomeEmail(data: Mail) {
    const job = await this.emailQueue.add('welcome', data);

    return { jobId: job.id };
  }

  async sendResetPasswordEmail(data: Mail) {
    const job = await this.emailQueue.add('reset-password', data);

    return { jobId: job.id };
  }
}
