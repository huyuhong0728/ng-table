import { WelcomeComponent } from "./../pages/welcome/welcome.component";
import { Component, OnInit, ViewChild } from "@angular/core";
import { CdkDrag, CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ComponentPortal } from "@angular/cdk/portal";

@Component({
  selector: "app-dragt",
  templateUrl: "./dragt.component.html",
  styleUrls: ["./dragt.component.less"],
})
export class DragtComponent implements OnInit {
  userSettingsPortal: any;
  constructor() {}

  ngOnInit(): void {
    this.userSettingsPortal = new ComponentPortal(WelcomeComponent);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.cdk.moved.subscribe((data) => {
    //   console.log(this.cdk.getFreeDragPosition());
    // });
  }

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
