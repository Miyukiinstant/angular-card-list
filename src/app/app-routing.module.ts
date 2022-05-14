import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CardComponent } from './components/card/card.component';
import { ClockComponent } from './components/clock/clock.component';
import { FurtrackComponent } from './components/furtrack/furtrack.component';

const routes: Routes = [
  {path: '', component: ClockComponent},
  {path:'inspiro', component: CardComponent},
  {path: 'furtrack', component: FurtrackComponent},  
  {path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [AboutComponent, FurtrackComponent, CardComponent, ClockComponent]