import { NgModule, ModuleWithProviders, Self } from '@angular/core';

import { StaticInjector } from './core/internal/static-injector';

@NgModule()
export class NgxsExtensionsDecoratorsModule {
  constructor(@Self() private staticInjector: StaticInjector) {}

  public static forRoot(): ModuleWithProviders<NgxsExtensionsDecoratorsModule> {
    return {
      ngModule: NgxsExtensionsDecoratorsModule,
      providers: [StaticInjector],
    };
  }
}
