import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-matchinfo',
  templateUrl: './matchinfo.component.html',
  styleUrls: ['./matchinfo.component.css']
})
export class MatchinfoComponent implements OnInit{
  @ViewChild('ballsDiv') ballsDiv!: ElementRef;
  chart: any;
  chart2: any;
  isSwipingEnabled = true;


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
///////
currentIndex = 0; // Tracks the current slide index
offset = 0; // Tracks the transform offset
startX = 0;
onTouchStart(event: TouchEvent) {
  this.startX = event.touches[0].clientX;

  // Check if the touch started inside the PlayerName div
  const touchTarget = event.target as HTMLElement;
  if (this.ballsDiv.nativeElement.contains(touchTarget)) {
    this.isSwipingEnabled = false; // Disable swiping
  } else {
    this.isSwipingEnabled = true; // Enable swiping
  }
}

// Handle touch end event
onTouchEnd(event: TouchEvent) {
  if (!this.isSwipingEnabled) return; // Skip swipe logic if swiping is disabled

  const endX = event.changedTouches[0].clientX;
  const deltaX = this.startX - endX;

  if (deltaX > 50) {
    this.nextSlide(); // Swipe left to go to the next slide
  } else if (deltaX < -50) {
    this.prevSlide(); // Swipe right to go to the previous slide
  }
}

// Move to the next slide
nextSlide() {
  if (this.currentIndex < 4) { // Adjust based on the number of slides
    this.currentIndex++;
    this.updateOffset();
  }
}

// Move to the previous slide
prevSlide() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
    this.updateOffset();
  }
}

// Update the transform offset
updateOffset() {
  this.offset = -this.currentIndex * 100;
}
}
