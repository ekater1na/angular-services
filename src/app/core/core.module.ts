import {ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {EnsureModuleLoadedOnceGuard} from './guards/ensure-module-loaded-once.guard';
import {LoggerService} from './services/logger.service';
import {DataService} from './services/data.service';
import {BookTrackerErrorHandlerService} from './services/book-tracker-error-handler.service';

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  declarations: [],
  providers: [
    // PlainLoggerService,
    // {provide: LoggerService, useExisting: PlainLoggerService},
    // { provide: LoggerService, useValue: {
    //   log: (message: string) => console.log(`MESSAGE: ${message}`),
    //   error: (message: string) => console.error(`PROBLEM: ${message}`),
    //   }},
    // { provide: DataService, useFactory: dataServiceFactory, deps: [LoggerService] },
    LoggerService,
    DataService,
    {provide: ErrorHandler, useClass: BookTrackerErrorHandlerService}
  ] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}
