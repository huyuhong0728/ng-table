import { HttpClient } from "@angular/common/http";

export function cla(name: string, sex: string[]) {
  return function (target) {
    console.log(name);
    console.log(sex);
    console.log(target);
    console.log(target.prototype.$Meta);
    target.prototype.ty(sex);
  };
}

export function mea(name: string, sex: string) {
  return function (target, methodName: string, decs: PropertyDescriptor) {
    console.log(name);
    console.log(sex);
    console.log(target);
    console.log(methodName);
    console.log(decs);
  };
}

export function para(name: string) {
  return function (target, paraName: string, paraIndex: number) {
    console.log(name);
    console.log(target);
    console.log(paraName);
    console.log(paraIndex);
  };
}

export function attra(name: string) {
  return function (target, arrrName) {
    console.log(name);
    console.log(target);
    console.log(arrrName);
  };
}

export class Htp {
  public htt: HttpClient;
  constructor(private http: HttpClient) {
    this.htt = this.http;
  }
}
