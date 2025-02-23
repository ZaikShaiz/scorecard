import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})

export class PlayerdetailsComponent implements OnInit {
  

  chart: any;
  chartOptions = {
    title:{
      text: null
    },
    animationEnabled: true,
    axisY: {
      includeZero: true,
      // suffix: "K"
    },
    data: [{
      type: "bar",
      color: "#2caffe" ,
      indexLabel: "{y}",
      yValueFormatString: "#,###K",
      dataPoints: [
        { label: "Snapchat", y: 15 },
        { label: "Instagram", y: 20 },
        { label: "YouTube", y: 24 },
        { label: "Twitter", y: 29 },
        { label: "Facebook", y: 73 },
        { label: "Snapchat", y: 15 },
        { label: "Instagram", y: 20 },
        { label: "YouTube", y: 24 },
        { label: "Twitter", y: 29 },
        { label: "Facebook", y: 73 }
      ]
    }]
  }	
  constructor(){}
  ngOnInit(): void {
   
  }

}
  

