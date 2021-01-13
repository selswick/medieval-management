import {
  Component,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {
  Chart
} from 'chart.js/'
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements AfterViewInit {
  @ViewChild('healthBar') healthBarCanvas;
  @ViewChild('winLossDoughnut') winLossDoughnutCanvas;
  // @ViewChild('populationPolar') populationPolarCanvas;
  // @ViewChild('milPowerDoughnut') milPowerDoughtnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  title = '{{user.name}}';
  healthBarChart: any;
  winLossDoughnutChart: any;
  // populationPolarChart: any;
  // milPowerDoughnutChart: any;
  lineChart: any;


  ngAfterViewInit() {
    this.plotHealthBar();
    this.plotWinLossDoughnut();
    // this.plotMilPowerDoughnut();
    // this.plotPopulationPolar();
    this.lineChartMethod();
  }

  plotHealthBar() {
    this.healthBarChart = new Chart(this.healthBarCanvas.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Health'],
        datasets: [{
          label: 'Fort Health',
          data: [36],
          barPercentage: 1.0,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              max: 50,
              min: 0,
            }
          }]
        }
      }
    });
  }

  plotWinLossDoughnut() {
    this.winLossDoughnutChart = new Chart(this.winLossDoughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Attacks Won', 'Defends Won', 'Spy Victories'],
        datasets: [{
          label: '# of Votes',
          data: [1581, 1699, 155],
          backgroundColor: [
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }


  // plotMilPowerDoughnut() {
  //   this.milPowerDoughnutChart = new Chart(this.milPowerDoughtnutCanvas.nativeElement, {
  //     type: 'doughnut',
  //     data: {
  //       labels: ['Attacks Won', 'Defends Won', 'Spy Victories'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [1581, 1699, 155],
  //         backgroundColor: [
  //           'rgba(255, 159, 64, 0.5)',
  //           'rgba(255, 99, 132, 0.5)',
  //           'rgba(54, 162, 235, 0.5)',
  //         ],
  //         hoverBackgroundColor: [
  //           '#FFCE56',
  //           '#FF6384',
  //           '#36A2EB',
  //           '#FFCE56',
  //           '#FF6384'
  //         ]
  //       }]
  //     }
  //   });
  // }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['September', 'October', 'November', 'December', 'January'],
        datasets: [{
          label: 'Gold Banked',
          fill: true,
          lineTension: 0,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [841, 3116841, 246841, 1946841, 2346841],
          spanGaps: false,
        }]
      }
    });
  }

  // plotPopulationPolar() {
  
  // }
}
