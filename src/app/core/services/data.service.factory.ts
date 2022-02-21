import {LoggerService} from './logger.service';
import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';

export function dataServiceFactory(logger: LoggerService, http: HttpClient) {
  const dataService: DataService = new DataService(logger, http);

  logger.log('Creating a new data service with factory function.')

  return dataService;
}
