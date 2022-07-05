import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private _HttpClient:HttpClient
  ) { }
  getCountry(): Observable<any>{
    return this._HttpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=90e9991bc28a60a9d1464c414db5e3b6&units=metric`);
  }
  getCountryRegion(city:any): Observable<any>{
    return this._HttpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=90e9991bc28a60a9d1464c414db5e3b6&units=metric`);
  }
}
