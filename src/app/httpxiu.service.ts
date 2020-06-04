import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { QXHttp } from "./clients";
import { Injectable } from "@angular/core";
import { GET, QUERY } from "./methods";

@Injectable({ providedIn: "root" })
export class HttpXiu extends QXHttp {
  constructor(http: HttpClient) {
    super(http);
  }

  @GET(
    "http://10.33.80.64:8070/api/DictInfo/search?dictid=6013&name=&splitParam=-"
  )
  getdict(@QUERY("username") username: string): Observable<any> {
    return;
  }
}
