/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';

const Parse = require('parse');
declare var require: any;

Parse.initialize("APPLICATION_ID" ,"MASTER_KEY");
Parse.serverURL = 'http://localhost:1337/parse/'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
