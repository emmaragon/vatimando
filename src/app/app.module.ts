import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from "./app.routes";
import { AppComponent } from './app.component';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from "./layout/layout.module";
import { BondSelectionModule } from './bond-selection/bond-selection.module';
import { initAppPaletteFactory } from "./app.config";
import { BondDetailModule } from './bond/components/bond-detail/bond-detail.module';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { mockApiServices } from './mock-api';
import { TreoMockApiModule } from 'src/@treo/lib/mock-api/mock-api.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: true }),
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      maxOpened: 5,
    }),
    // TreoModule,
    TreoMockApiModule.forRoot(mockApiServices)
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initAppPaletteFactory({
        'light-primary': '#445565',
        'light-accent': '#FF8C2F',
      }),
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
