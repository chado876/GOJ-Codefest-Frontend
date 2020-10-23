import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard-last-quarter',
  templateUrl: './dashboard-last-quarter.component.html',
  styleUrls: ['./dashboard-last-quarter.component.scss'],
})
export class DashboardLastQuarterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var ctx = document.getElementById('myChart') as HTMLCanvasElement;
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff',
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }
}
