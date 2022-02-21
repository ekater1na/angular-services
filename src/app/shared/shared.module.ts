import {ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import {LoggerService} from '../core/services/logger.service';
import {DataService} from '../core/services/data.service';
import {BookTrackerErrorHandlerService} from '../core/services/book-tracker-error-handler.service';

@NgModule({
  exports: [CommonModule, CapitalizePipe],
  imports: [CommonModule],
  declarations: [
    CapitalizePipe
  ],
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
  ]
})
export class SharedModule { }
