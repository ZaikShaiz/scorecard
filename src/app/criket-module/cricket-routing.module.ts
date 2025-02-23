import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScorcardComponent } from './scorcard/scorcard.component';
import { MapType } from '@angular/compiler';
import { MatchinfoComponent } from './matchinfo/matchinfo.component';


const routes: Routes = [
  // {path:'',component: ScorcardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CricketRoutingModule { }
