import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FrontBlogComponent } from './front-blog/front-blog.component';



@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TimelineComponent,
    CalendarComponent,
    FrontBlogComponent,

  ],
})
export class DashboardModule { }
