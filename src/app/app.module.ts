import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './content/pages/home/home.component';
import { NavbarComponent } from './content/shared/navbar/navbar.component';
import { AboutComponent } from './content/pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './content/shared/footer/footer.component';
import { NotfoundComponent } from './content/shared/notfound/notfound.component';
import { ToTwelveHourPipe } from './pipes/to-twelve-hour.pipe';
import { PrayersComponent } from './content/pages/prayers/prayers.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ArticlesComponent } from './content/pages/articles/articles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleDetailsComponent } from './content/pages/articles/article-details/article-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from './content/pages/weather/weather.component';
import { LoaderComponent } from './content/shared/loader/loader.component';
import { ContactUsComponent } from './content/pages/contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    NotfoundComponent,
    ToTwelveHourPipe,
    PrayersComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    WeatherComponent,
    LoaderComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgbModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
