import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrayerTimeService } from 'src/app/services/prayer-time.service';

@Component({
  selector: 'app-prayers',
  templateUrl: './prayers.component.html',
  styleUrls: ['./prayers.component.scss']
})
export class PrayersComponent implements OnInit {
  loading: boolean = false;
  prayerTimeContainer:any;
  pipe = new DatePipe('en-US');
  constructor(
    private _PrayerTimeService:PrayerTimeService
  ){}
  prayerForm: FormGroup = new FormGroup({
    'countries': new FormControl('', Validators.required)
  })
  showPrayers(){
    this.loading = true;

    this._PrayerTimeService.getPrayerTime(this.pipe.transform(Date.now(), 'dd-MM-yyyy')).subscribe(
      (data)=> {
        this.prayerTimeContainer = data.data.timings;
        this.loading = false;

      }
    )
  }

  submit(prayerForm:FormGroup){
    this.loading = true;
    this._PrayerTimeService.getPrayerTimeAndRegion(
      this.pipe.transform(Date.now(), 'dd-MM-yyyy'),
       prayerForm.value.countries
      ).subscribe(
      (data)=> {
        this.prayerTimeContainer = data.data.timings;
        this.loading = false;

      }
    )
  }
  ngOnInit(): void {
    this.showPrayers();
    // console.log(this.pipe.transform(Date.now(), 'dd-MM-yyyy'));
  }

}
