import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestanimatedComponent } from "./testanimated/testanimated.component";
import { RangesDirective } from "./ranges.directive";
import { BrowserModule } from "@angular/platform-browser";
import { TestexendsComponent } from "./testexends/testexends.component";
import { TablesComponent } from "./tables/tables.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
const COMPONENTS = [
  TestanimatedComponent,
  RangesDirective,
  TestexendsComponent,
  TablesComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FormsModule, ScrollingModule],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
