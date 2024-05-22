import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoggerService } from './Services/logger.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), LoggerService]
};
