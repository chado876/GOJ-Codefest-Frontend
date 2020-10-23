import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private adminService : AdminService) {
  }

  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  files: any = [];
  file: File;
  filename = 'Choose file';
  orders: any[];
  itemId: any;

  ngOnInit(): void {

    this.adminService.getAllItems().toPromise().then((success)=>{
      this.orders = success;
    });

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


  onFileChanged(event: { target: { files: any[] } }) {
    this.file = event.target.files[0];

    // console.log(this.file);

    // if (this.file) {
    //   if (this.file.size / 1024 <= 5000) {
    //     //check if file size <5mb
    //     // this.selected = false;
    //     // this.valid = true;
    //   } else {
    //     // this.valid = false;
    //     // this.success = false;
    //     // this.selected = true;
    //   }
      this.filename = this.file.name;
    }

    setItem(item : any){
      this.itemId = item.ID;
    }

    async uploadInvoice() {
      // submitDocument() {
      //pass file to uploadService for it to be uploaded
      // this.isLoading = true;
      let formData = new FormData();
      formData.append('invoice', this.file);
      formData.append('itemId', this.itemId);

  
      let response = await this.adminService.uploadInvoice(formData);
  
  }
  }

  
