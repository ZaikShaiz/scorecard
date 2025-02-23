import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-matchinfo',
  templateUrl: './matchinfo.component.html',
  styleUrls: ['./matchinfo.component.css']
})
export class MatchinfoComponent implements OnInit{
  chart: any;
  chart2: any;


  constructor(){}
  ngOnInit(): void {

  }

// graph work

chartOptions = {
  title:{
    text: null
  },
  animationEnabled: true,
  axisY: {
    includeZero: true,
    suffix: "",
    
  },
  axisX: {
    title : "BRISBANE HEAT (W)",
    gridColor: "#e6e6e6"
  },
  data: [{
    type: "bar",
    color: "#2caffe" ,
    indexLabel: "{y}",
    yValueFormatString: "#,###",
    dataPoints: [
      { label: "1", y: 15 },
      { label: "1", y: 20 },
      { label: "1", y: 24 },
      { label: "1", y: 29 },
      { label: "1", y: 73 },
      { label: "1", y: 15 },
      { label: "1", y: 20 },
      { label: "1", y: 24 },
      { label: "1", y: 29 },
      { label: "1", y: 73 },
      { label: "1", y: 73 }
    ]
  }]
}	
chartOptions2 = {
  title:{
    text: null
  },
  dataPointWidth: 10,
  animationEnabled: true,
  axisY: {
    includeZero: true,
    suffix: "",
    title : "BRISBANE HEAT (W)",
  },
  axisX: {
    
    gridColor: "#e6e6e6"
  },
  data: [{
    type: "column",
    color: "#2caffe" ,
    // indexLabel: "{y}",
    yValueFormatString: "#,###",
    dataPoints: [
      { label: "1", y: 15 },
      { label: "2", y: 20 },
      { label: "3", y: 24 },
      { label: "4", y: 29 },
      { label: "5", y: 73 },
      { label: "6", y: 15 },
      { label: "7", y: 20 },
      { label: "8", y: 24 },
      { label: "9", y: 29 },
      { label: "10", y: 73 },
      { label: "11", y: 73 }
    ]
  }]
}

// graph end
  @ViewChild('scrollContainer', { static: true }) scrollContainer: ElementRef | undefined;
  scrollStep = 100; 
  scrollLeft() {
    if (this.scrollContainer) {
      const currentScroll = this.scrollContainer.nativeElement.scrollLeft;
      const newScroll = Math.max(currentScroll - this.scrollStep, 0);

      this.scrollContainer.nativeElement.scrollTo({
        left: newScroll,
        behavior: 'smooth' 
      });
    }
  }

  scrollRight() {
    if (this.scrollContainer) {
      const currentScroll = this.scrollContainer.nativeElement.scrollLeft;
      const maxScroll = this.scrollContainer.nativeElement.scrollWidth - this.scrollContainer.nativeElement.clientWidth;
      const newScroll = Math.min(currentScroll + this.scrollStep, maxScroll);

      this.scrollContainer.nativeElement.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  }
  canScrollLeft(): boolean {
    return this.scrollContainer?.nativeElement.scrollLeft > 0 || false;
  }
  canScrollRight(): boolean {
    if (this.scrollContainer) {
      const scrollWidth = this.scrollContainer.nativeElement.scrollWidth;
      const containerWidth = this.scrollContainer.nativeElement.clientWidth;
      const maxScrollLeft = scrollWidth - containerWidth;
      return this.scrollContainer.nativeElement.scrollLeft < maxScrollLeft || false;
    }
    return false;
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    const scrollLeft = element.scrollLeft;
    // console.log('Horizontal scroll position:', scrollLeft);
    this.canScrollLeft();
    this.canScrollRight();
  }

}
