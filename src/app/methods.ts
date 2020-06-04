import { QXHttp } from "./clients";

function madeinchina(method: "GET" | "POST") {
  return function (url: string) {
    return function (
      target: QXHttp,
      methodName: string,
      desc: PropertyDescriptor
    ) {
      desc.value = function (...args: string[]) {
        console.log(args);
        return this.http.request(method, url, {});
      };
      return desc;
    };
  };
}

function madeinparams(type: "QUERY") {
  return function (params?: string) {
    // console.log(params);
    return function (target: QXHttp, paramsName: string, paramsIndex: number) {
      // console.log(this);
      // console.log(target);
      // console.log(paramsName);
      // console.log(paramsIndex);
    };
  };
}
export const GET = madeinchina("GET");

export const POST = madeinchina("POST");

export const QUERY = madeinparams("QUERY");
