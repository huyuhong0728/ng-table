import { OverlayRef, Overlay, OverlayConfig } from "@angular/cdk/overlay";
import {
  Observable,
  of,
  fromEvent,
  concat,
  merge,
  interval,
  combineLatest,
  zip,
  from,
  scheduled,
  Scheduler,
  asyncScheduler,
  asapScheduler,
} from "rxjs";
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import {
  Component,
  OnInit,
  Injector,
  Injectable,
  InjectionToken,
  ViewChild,
  ElementRef,
  ViewContainerRef,
} from "@angular/core";
import { HttpXiu } from "./httpxiu.service";
import { Store, select } from "@ngrx/store";
import { ADD, DEL, Reset, GETDATA, ADDDATA, DELDATA } from "./counter.actions";
import {
  concatAll,
  map,
  takeUntil,
  startWith,
  take,
  withLatestFrom,
  bufferCount,
  bufferTime,
  delay,
  distinct,
  switchAll,
  mergeAll,
  switchMap,
  subscribeOn,
} from "rxjs/operators";
import { async } from "rxjs/internal/scheduler/async";
import { AsyncScheduler } from "rxjs/internal/scheduler/AsyncScheduler";
import { ComponentPortal, PortalInjector } from "@angular/cdk/portal";
@Injectable()
export class QValue {
  a = 1;
}
const valid = (value, max, min) => {
  return Math.min(Math.max(value, min), max);
};
export const resToken = new InjectionToken<string>("why");
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  count: Observable<number>;

  data: Observable<Array<{ a: number; b: number }>>;

  @ViewChild("reft", { static: false }) reft: ElementRef;
  user = {
    id: 888,
    name: "JerryHong",
    courseLists: [
      {
        name: "My Courses",
        courses: [
          {
            id: 511019,
            title: "React for Beginners",
            coverPng:
              "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
            tags: [{ id: 1, name: "JavaScript" }],
            rating: 5,
          },
          {
            id: 511020,
            title: "Front-End automat workflow",
            coverPng:
              "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
            tags: [
              { id: 2, name: "gulp" },
              { id: 3, name: "webpack" },
            ],
            rating: 4,
          },
        ],
      },
      {
        name: "New Release",
        courses: [
          {
            id: 511022,
            title: "Vue2 for Beginners",
            coverPng:
              "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
            tags: [{ id: 1, name: "JavaScript" }],
            rating: 5,
          },
          {
            id: 511023,
            title: "Angular2 for Beginners",
            coverPng:
              "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
            tags: [{ id: 1, name: "JavaScript" }],
            rating: 4,
          },
        ],
      },
    ],
  };
  constructor(
    private httpXiu: HttpXiu,
    private store: Store<{
      count: number;
      newData: Array<{ a: number; b: number }>;
    }>,
    public viewContainerRef: ViewContainerRef,
    private overlay: Overlay
  ) {
    // console.log(this.store);
    this.count = store.pipe(select("count"));
    this.data = store.pipe(select("newData"));
  }
  ngOnInit(): void {}

  createModal() {
    let a = this.overlay
      .position()
      .flexibleConnectedTo(this.reft)
      .withPositions([
        {
          originX: "start",
          originY: "bottom",
          overlayX: "start",
          overlayY: "top",
          offsetX: 0,
          offsetY: 0,
        },
      ]);
    a.withLockedPosition(true);
    const config = new OverlayConfig({
      width: 200,
      height: 200,
      positionStrategy: a,
      hasBackdrop: true,
    });
    config.scrollStrategy = this.overlay.scrollStrategies.reposition();
    let b = this.overlay.create(config);

    b.attach(
      new ComponentPortal(
        WelcomeComponent,
        this.viewContainerRef,
        Injector.create([{ provide: "123", useValue: "你是谁" }])
      )
    );
    b.backdropClick().subscribe((data) => {
      b.dispose();
    });
  }

  delo(arr: Array<any>) {
    let s = fromEvent(document, "mousemove").pipe(
      map((item: any) => {
        return {
          x: item.clientX,
          y: item.clientY,
        };
      })
    );
    const delatime = 50;
    arr.forEach((data, index: number) => {
      s.pipe(delay(delatime * index)).subscribe((res) => {
        data.style.transform =
          "translate3d(" + res.x + "px, " + res.y + "px, 0)";
      });
    });
  }
  test() {
    this.httpXiu.getdict("哈哈").subscribe((data) => {
      // console.log(data);
    });
  }

  dragMethod() {
    let drag = document.getElementById("drag");
    let body = document.body;
    let mousedown = fromEvent(drag, "mousedown");
    let mouseup = fromEvent(body, "mouseup");
    let mousemove = fromEvent(body, "mousemove");
    const source = mousedown.pipe(
      map((event) => mousemove.pipe(takeUntil(mouseup))),
      concatAll(),
      withLatestFrom(mousedown, (x: any, y: any) => {
        return {
          x: valid(
            x.clientX - y.offsetX,
            window.innerWidth - drag.getBoundingClientRect().width,
            0
          ),
          y: valid(
            x.clientY - y.offsetY,
            window.innerHeight - drag.getBoundingClientRect().height,
            0
          ),
        };
      })
    );
    source.subscribe((data) => {
      drag.style.left = data.x + "px";
      drag.style.top = data.y + "px";
    });
  }

  add() {
    this.store.dispatch(ADDDATA());
    this.store.dispatch(GETDATA({ name: "哈哈哈", sex: "男的" }));
  }

  del() {
    this.store.dispatch(DELDATA());
  }

  reset() {
    this.store.dispatch(Reset());
  }
}
