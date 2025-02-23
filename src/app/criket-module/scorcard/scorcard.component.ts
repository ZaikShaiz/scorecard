import { Component, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
// declare var $: any;
@Component({
  selector: 'app-scorcard',
  templateUrl: './scorcard.component.html',
  styleUrls: ['./scorcard.component.css']
})
export class ScorcardComponent  {
  constructor(private cdRef: ChangeDetectorRef){}

  // ngAfterViewInit(): void {
  //   $('#carouselExample').carousel();
  //   this.cdRef.detectChanges();
  // } 
}
