import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
 
    items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
    currentIndex = 0;
    offset = 0;
    startX = 0;
  
    // Handle touch start event
    onTouchStart(event: TouchEvent) {
      this.startX = event.touches[0].clientX;
    }
  
    // Handle touch end event
    onTouchEnd(event: TouchEvent) {
      const endX = event.changedTouches[0].clientX;
      const deltaX = this.startX - endX;
  
      if (deltaX > 50) {
        this.nextItem(); // Swipe left to go to the next item
      } else if (deltaX < -50) {
        this.prevItem(); // Swipe right to go to the previous item
      }
    }
  
    // Move to the next item
    nextItem() {
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex++;
        this.updateOffset();
      }
    }
  
    // Move to the previous item
    prevItem() {
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