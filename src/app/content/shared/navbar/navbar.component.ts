import { DatePipe } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PrayerTimeService } from 'src/app/services/prayer-time.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  weatherContainer:any;
  prayerTimeContainer:any;
  categories: any[] =[];
  pipe = new DatePipe('en-US');
  constructor(
    private _PrayerTimeService:PrayerTimeService,
    private _CategoryService:CategoryService,
    private _WeatherService:WeatherService,
    private _Renderer2:Renderer2


  ){}
  getPrayersTime(){
    this._PrayerTimeService.getPrayerTime(this.pipe.transform(Date.now(), 'dd-MM-yyyy')).subscribe(
      (data)=> {
        this.prayerTimeContainer = data.data.timings
      }
    )
  }
  showWeather(){
    this._WeatherService.getCountry().subscribe(
      (data) => {
        this.weatherContainer = data.main;

      }
    )
  }
  showCategories(){
    this._CategoryService.getCategories().subscribe(
      (response) => {
        this.categories = response.rows
      }
    )
  }
  navOpen(){
    let sidebar = document.querySelector('.side')
    this._Renderer2.addClass(document.body,'menu-hide')
    this._Renderer2.removeClass(document.body,'on-side')
    this._Renderer2.removeClass(sidebar, 'on')
  }
  ngOnInit(): void {
    this.showWeather();
    this.getPrayersTime()
    this.showCategories();
    // console.log(this.pipe.transform(Date.now(), 'dd-MM-yyyy'));
  }

}
