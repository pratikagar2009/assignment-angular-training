import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { DynamicDivCreationComponent } from './dynamic-div-creation/dynamic-div-creation.component';

// const routes: Routes = [];

const appRoutes: Routes = [
  {path : '', component: FloatingBannerComponent},
  {path : 'floatingbanner', component: FloatingBannerComponent},
  {path : 'countdowntimer', component: CountdownTimerComponent},
  {path : 'dynamicdivcreation', component: DynamicDivCreationComponent},
  {path : 'categorypage', component: CategoryPageComponent},
  {path : 'studentmarks', component: StudentMarksComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo:'/not-found'}


];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
