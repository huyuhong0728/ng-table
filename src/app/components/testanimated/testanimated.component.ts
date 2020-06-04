import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  HostBinding,
  ViewContainerRef,
  TemplateRef,
} from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";
import { TestexendsComponent } from "../testexends/testexends.component";

@Component({
  selector: "app-testanimated",
  templateUrl: "./testanimated.component.html",
  styleUrls: ["./testanimated.component.less"],
})
export class TestanimatedComponent extends TestexendsComponent
  implements OnInit {
  @ViewChild("temptwo", { static: true }) temptwo: TemplateRef<any>;

  @ViewChild("tempone", { read: ViewContainerRef }) tempone: ViewContainerRef;
  constructor(public el: ElementRef) {
    super(el);
  }
}
