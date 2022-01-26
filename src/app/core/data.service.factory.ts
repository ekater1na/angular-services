import {LoggerService} from "./logger.service";
import {DataService} from "./data.service";

export function dataServiceFactory(logger: LoggerService) {
  let dataService: DataService = new DataService(logger);

  logger.log('Creating a new data service with factory function.')

  return dataService;
}
