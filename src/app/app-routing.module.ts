import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorcardComponent } from './criket-module/scorcard/scorcard.component';

const routes: Routes = [
         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
