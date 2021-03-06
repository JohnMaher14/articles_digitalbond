import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './content/pages/articles/articles.component';
import { AboutComponent } from './content/pages/about/about.component';
import { HomeComponent } from './content/pages/home/home.component';
import { PrayersComponent } from './content/pages/prayers/prayers.component';
import { NotfoundComponent } from './content/shared/notfound/notfound.component';
import { ArticleDetailsComponent } from './content/pages/articles/article-details/article-details.component';
import { WeatherComponent } from './content/pages/weather/weather.component';
import { ContactUsComponent } from './content/pages/contact-us/contact-us.component';

const routes: Routes = [
  {path:'', redirectTo:'/' , pathMatch:'full'},
  {path:'' , component:HomeComponent},
  {path:'about-us' , component:AboutComponent},
  {path:'articles/:id' , component:ArticlesComponent},
  {path:'article-details/:id' , component:ArticleDetailsComponent},
  {path:'contact-us' , component:ContactUsComponent},
  {path:'prayers' , component:PrayersComponent},
  {path:'weather' , component:WeatherComponent},
  {path:'**' , component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true , scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
