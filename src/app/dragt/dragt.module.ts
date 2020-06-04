import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DragtRoutingModule } from "./dragt-routing.module";
import { DragtComponent } from "./dragt.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PortalModule } from "@angular/cdk/portal";
import { WelcomeComponent } from "../pages/welcome/welcome.component";
@NgModule({
  declarations: [DragtComponent],
  imports: [CommonModule, DragtRoutingModule, DragDropModule, PortalModule],
  entryComponents: [WelcomeComponent],
})
export class DragtModule {}
