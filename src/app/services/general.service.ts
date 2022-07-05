import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private _HttpClient:HttpClient
  ) { }
  aboutUs(): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}about_us_page_index`)
  }
  contactUs(): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}contact_us_index`)
  }
  getCommentsIndex(id:number) : Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}comment_index/${id}`)
  }
  sendMessage(formData:any):Observable<any>{
    return this._HttpClient.post(`${environment.apiUrl}sendMessage`, formData)
  }
}
