import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { FurtrackComponent } from './components/furtrack/furtrack.component';
import { ClockComponent } from './components/clock/clock.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TabGroupComponent } from './components/tab-group/tab-group.component';




@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FurtrackComponent,
    ClockComponent,
    TabGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatInputModule,
    MatSliderModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatSidenavModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
