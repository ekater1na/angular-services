import { NgModule, Optional, SkipSelf } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {EnsureModuleLoadedOnceGuard} from './ensure-module-loaded-once.guard';

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  declarations: [],
  providers: [
  ] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}
