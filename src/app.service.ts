import { Injectable } from '@nestjs/common';

import modernTemplate from './templates/modern';

@Injectable()
export class AppService {
  getHtml(template, user: { firstname: string; lastname: string }): string {
    if (template === 'modern') {
      return modernTemplate(user);
    }
    return modernTemplate(user);
  }

  getResume(id: number) {
    return Promise.resolve({
      id,
      firstname: 'John',
      lastname: 'Doe',
      template: 'modern',
    });
  }
}
