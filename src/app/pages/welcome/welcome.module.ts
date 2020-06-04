import { NgModule } from "@angular/core";

import { WelcomeRoutingModule } from "./welcome-routing.module";

import { WelcomeComponent } from "./welcome.component";
import { NzTableModule } from "ng-zorro-antd/table";
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  imports: [WelcomeRoutingModule, NzTableModule, FormsModule, ComponentsModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
