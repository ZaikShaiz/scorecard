import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CricketRoutingModule } from './criket-module/cricket-routing.module';
import { ScorcardComponent } from './criket-module/scorcard/scorcard.component';
import { MatchinfoComponent } from './criket-module/matchinfo/matchinfo.component';
import { PlayerdetailsComponent } from './criket-module/playerdetails/playerdetails.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ScorcardComponent,
    MatchinfoComponent,
    PlayerdetailsComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CricketRoutingModule,
    CanvasJSAngularChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
