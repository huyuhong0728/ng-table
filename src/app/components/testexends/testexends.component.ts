import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: "app-testexends",
  templateUrl: "./testexends.component.html",
  styleUrls: ["./testexends.component.less"],
})
export class TestexendsComponent implements OnInit {
  constructor(public el: ElementRef) {}

  ngOnInit(): void {
    console.log("123");
  }

  testa() {
    console.log("触发了");
  }
}
