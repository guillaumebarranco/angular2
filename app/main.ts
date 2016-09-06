import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

/** @const platform : The platform */
const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
