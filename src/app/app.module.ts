import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IconsProviderModule } from "./icons-provider.module";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { zh_CN } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import zh from "@angular/common/locales/zh";
import { NzTableModule } from "ng-zorro-antd/table";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { NzModalModule } from "ng-zorro-antd/modal";
import { PortalModule } from "@angular/cdk/portal";
import { OverlayModule } from "@angular/cdk/overlay";
import { StoreModule } from "@ngrx/store";
import { metaReducers } from "./counter.reducer";
import { DataeModule } from "./datae.module";

registerLocaleData(zh);
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    PerfectScrollbarModule,
    NzModalModule,
    PortalModule,
    OverlayModule,
    StoreModule.forRoot({}, { metaReducers }),
    DataeModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
