import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CardComponent } from './components/card/card.component';
import { ClockComponent } from './components/clock/clock.component';
import { FurtrackComponent } from './components/furtrack/furtrack.component';
import { OrariComponent } from './components/orari/orari.component';

const routes: Routes = [
  {path: '', component: ClockComponent, data:{title:"Home"}},
  {path:'inspiro', component: CardComponent, data:{title:"Inspiro"}},
  {path: 'furtrack', component: FurtrackComponent, data:{title:"Furtrack"}},  
  {path: 'orario', component: OrariComponent, data:{title:"Orario"} },
  {path: 'about', component: AboutComponent, data:{title:"About"} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ClockComponent, CardComponent, FurtrackComponent, AboutComponent, OrariComponent]