import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getSecret(): Promise<Record<string, string>> {
    const ping = this.configService.getOrThrow('PING');
    const pong = this.configService.getOrThrow('PONG');

    return {
      ping,
      pong,
    };
  }
}
