import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { DisplayCountdownComponent } from './countdown-timer/display-countdown/display-countdown.component';
import { InstructTimerComponent } from './countdown-timer/instruct-timer/instruct-timer.component';
import { LogTimestampComponent } from './countdown-timer/log-timestamp/log-timestamp.component';
import { StartpauseCountComponent } from './countdown-timer/startpause-count/startpause-count.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { DynamicDivCreationComponent } from './dynamic-div-creation/dynamic-div-creation.component';
import { DivDisplayComponent } from './dynamic-div-creation/div-display/div-display.component';
import { PlaceholderDirective } from './placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    DisplayCountdownComponent,
    InstructTimerComponent,
    LogTimestampComponent,
    StartpauseCountComponent,
    FloatingBannerComponent,
    CategoryPageComponent,
    PageNotFoundComponent,
    StudentMarksComponent,
    DynamicDivCreationComponent,
    DivDisplayComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
