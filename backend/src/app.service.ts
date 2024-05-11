import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { name: string } {
    return {
      name: "Opus 3.5"

    }
  }
}
