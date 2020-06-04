import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRanges]'
})
export class RangesDirective {

  _range: number[];

  @Input()
  set range(num: number[]) {
    this.elContain.clear()
    let res = this.getRange(num[0], num[1]);
    res.forEach(num => {
      this.elContain.createEmbeddedView(this.el, {$implicit: num})
    })
  }
  constructor(private el: TemplateRef<any>,
    private elContain: ViewContainerRef) { }

  getRange(from, to) {
    let res = [];
    for(let i = from; from < to; to++) {
      res.push(i);
    }
    return res;
  }
}
