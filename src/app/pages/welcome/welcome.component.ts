import { Component, OnInit, Inject } from "@angular/core";
import { cla, mea, para, attra, Htp } from "src/app/de/de";
import { OverlayRef } from "@angular/cdk/overlay";
import { HttpClient } from "@angular/common/http";
import { resToken } from "src/app/app.component";
// @cla("123123", ["1", "2", "a", "b"])
@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.less"],
})
export class WelcomeComponent implements OnInit {
  // @attra("123213")
  m: number;

  task: OverlayRef;
  constructor() {
    this.m = 123123;
  }

  ngOnInit() {
    // console.log(this.wel);
    // this.task = this.wel;
    // this.ty<number>([1, 2, 3]);
  }

  close() {
    this.task.dispose();
  }
  // @mea("123", "123")
  ty<T>(ar: T[]): T[] {
    console.log(ar.length);
    return ar;
  }

  // testme(userId: string, @para("我传了参数") nameId: string) {}
}
