import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  url = environment.baseUrl + 'predict';

  constructor(private httpClient: HttpClient) { }

  predict(obj:Object){
    console.log(obj)
    return this.httpClient.post(this.url,obj, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  }
}
