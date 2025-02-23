import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorcardComponent } from './scorcard/scorcard.component';
import { MatchinfoComponent } from './matchinfo/matchinfo.component';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';



@NgModule({
  declarations: [
    // ScorcardComponent,
    // MatchinfoComponent,
    // PlayerdetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    // ScorcardComponent,
    // MatchinfoComponent
  ]
})
export class CricketModuleModule { }
