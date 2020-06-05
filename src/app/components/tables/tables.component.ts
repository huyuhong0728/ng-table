import { Component, OnInit, NgZone, ViewChild, Renderer2 } from "@angular/core";
import { ScrollDispatcher, CdkScrollable } from "@angular/cdk/overlay";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { fromEvent } from "rxjs";
import { map, takeUntil, concatAll } from "rxjs/operators";
interface TestDataBase {
  name: string;
  labWidth: number;
}
@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.less"],
})
export class TablesComponent implements OnInit {
  // items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  dataBase = [];

  dataTitle = [
    {
      title: "姓名",
      labWidth: 50,
    },
    {
      title: "年龄",
      labWidth: 60,
    },
    {
      title: "身份",
      labWidth: 70,
    },
    {
      title: "户籍",
      labWidth: 80,
    },
    {
      title: "所在地",
      labWidth: 90,
    },
    {
      title: "出生",
      labWidth: 100,
    },
    {
      title: "公司",
      labWidth: 110,
    },
    {
      title: "年份",
      labWidth: 120,
    },
    {
      title: "别名",
      labWidth: 130,
    },
    {
      title: "英文名",
      labWidth: 140,
    },
    {
      title: "国际",
      labWidth: 150,
    },
    {
      title: "国际",
      labWidth: 150,
    },
    {
      title: "国际",
      labWidth: 150,
    },
    {
      title: "国际",
      labWidth: 150,
    },
    {
      title: "国际",
      labWidth: 150,
    },
    {
      title: "国际",
      labWidth: 150,
    },
  ];
  scrollLeft: string;
  lastDom: any;
  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private zone: NgZone,
    private render: Renderer2
  ) {}

  ngOnInit(): void {
    Array.from({ length: 1000 }).forEach((data, i) => {
      this.dataBase.push({
        row: [
          {
            name: `名${i}壹`,
            labWidth: 50,
            isSelect: false,
          },
          {
            name: `名${i}贰`,
            labWidth: 60,
            isSelect: false,
          },
          {
            name: `名${i}叁`,
            labWidth: 70,
            isSelect: false,
          },
          {
            name: `名${i}肆`,
            labWidth: 80,
            isSelect: false,
          },
          {
            name: `名${i}伍`,
            labWidth: 90,
            isSelect: false,
          },
          {
            name: `名${i}陆`,
            labWidth: 100,
            isSelect: false,
          },
          {
            name: `名${i}柒`,
            labWidth: 110,
            isSelect: false,
          },
          {
            name: `名${i}捌`,
            labWidth: 120,
            isSelect: false,
          },
          {
            name: `名${i}玖`,
            labWidth: 130,
            isSelect: false,
          },
          {
            name: `名${i}拾`,
            labWidth: 140,
            isSelect: false,
          },
          {
            name: `名${i}拾忆`,
            labWidth: 150,
            isSelect: false,
          },
          {
            name: `名${i}拾忆`,
            labWidth: 150,
            isSelect: false,
          },
          {
            name: `名${i}拾忆`,
            labWidth: 150,
            isSelect: false,
          },
          {
            name: `名${i}拾忆`,
            labWidth: 150,
            isSelect: false,
          },
          {
            name: `名${i}拾忆`,
            labWidth: 150,
            isSelect: false,
          },
          {
            name: `名${i}拾忆`,
            labWidth: 150,
            isSelect: false,
          },
        ],
      });
    });
    // this.scrollDispatcher.scrolled().subscribe((data) => {
    //   console.log(data);
    // });
  }

  ngAfterViewInit(): void {
    let viewport = document.querySelector(".example-viewport");
    let mousedown = fromEvent(viewport, "mousedown");
    let mousemove = fromEvent(document, "mousemove");
    let mouseup = fromEvent(document, "mouseup");
    let initName = "";
    let ret = [];
    let firstDom = null;
    this.lastDom = null;
    mousedown
      .pipe(
        map((item: MouseEvent) => {
          viewport.querySelectorAll(".example-col").forEach((col) => {
            if (col.classList.contains("col-active")) {
              col.classList.remove("col-active");
            }
            if (col.classList.contains("col-last-active")) {
              col.classList.remove("col-last-active");
            }
          });
          if (this.lastDom) {
            this.render.removeClass(this.lastDom, "col-last-active");
          }
          this.render.addClass(item.target, "col-last-active");
          initName = (item.target as any).getAttribute("name");
          firstDom = item.target;
          return mousemove.pipe(takeUntil(mouseup));
        }),
        concatAll()
      )
      .subscribe((data: MouseEvent) => {
        // 表格选中逻辑
        if ((data.target as any).classList.contains("example-col")) {
          ret.forEach((aa) => {
            (aa.row as []).forEach((dd: any) => {
              dd["isSelect"] = false;
            });
          });
          if (this.lastDom) {
            this.render.removeClass(this.lastDom, "col-last-active");
          }
          let nowName: string = (data.target as any).getAttribute("name");

          let oo = Number(initName.split("_")[0]);
          let pp = Number(nowName.split("_")[0]);
          if (oo > pp) {
            let temp = 0;
            temp = oo;
            oo = pp;
            pp = temp;
          }
          ret = this.dataBase.slice(oo - 1, pp);

          let initxuhao: number = Number(initName.split("_")[2]);
          let nowxuhao: number = Number(nowName.split("_")[2]);
          if (initxuhao > nowxuhao) {
            let temp = 0;
            temp = initxuhao;
            initxuhao = nowxuhao;
            nowxuhao = temp;
          }
          let y = [];
          ret.forEach((item) => {
            for (let r = initxuhao; r <= nowxuhao; r++) {
              y.push(item.row[r - 1]);
            }
          });
          y.map((data) => {
            data["isSelect"] = true;
          });
          this.lastDom = data.target;
          this.render.addClass(data.target, "col-last-active");
          this.render.addClass(firstDom, "col-active");
        }

        // 探索表格下滑滚动
      });
  }
}
