import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpResponseSample} from '../models/http-response-sample';
import { NgModel } from '@angular/forms';
import {ManuRegForm} from '../manu-reg-form';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpHandler:HttpClient) { }

  postDetails(manufDetails:ManuRegForm){
    debugger;
    let configURL: string;
    configURL='http://localhost:64407/api/ManufacturerController/saveDetails';
    const httpOptions= { headers: { 'Content-Type': 'application/json'} }
    return this.httpHandler.post(configURL,JSON.stringify(manufDetails),httpOptions);
  }
  getStates(){
    let configUrl:string;
    configUrl='http://api.stg.msupply.in/api/dashboard';
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCAyIiwiZW1haWxJZCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNWI0ZDA3NTI3MTJlYTYwY2Y2MTAxOWY3IiwicGVybWlzc2lvbnMiOlsiMTAxIiwiMTAyIiwiMjAxIiwiMjAyIiwiMzAwIiwiNDAwIiwiNTAwIiwiNjAxIiwiNjAyIiwiNjAzIl0sImlhdCI6MTUzNTcyMjMyNiwiZXhwIjoxNTY3MjU4MzI2fQ.mAqQcuDGWveNqtTprjpljYpz3i1hzBFY_wfBClGB9aY' }) };
    return this.httpHandler.get<HttpResponseSample>(configUrl,httpOptions);
  }
}
