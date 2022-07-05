import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  loading: boolean = true;

  weatherContainer:any;
  constructor(
    private _WeatherService:WeatherService
  ){}
  weatherForm: FormGroup = new FormGroup({
    'countries': new FormControl('', Validators.required)
  })
  showPrayers(){
    this.loading = true;

    this._WeatherService.getCountry().subscribe(
      (data)=> {
        this.weatherContainer = data.main;
        this.loading = false;

      }
    )
  }

  submit(weatherForm:FormGroup){
    this.loading = true;

    this._WeatherService.getCountryRegion(
       weatherForm.value.countries
      ).subscribe(
      (data)=> {
        this.weatherContainer = data.main;
        this.loading = false;

      }
    )
  }
  ngOnInit(): void {
    this.showPrayers();
    // console.log(this.pipe.transform(Date.now(), 'dd-MM-yyyy'));
  }

}
