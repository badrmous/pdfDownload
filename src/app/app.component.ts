import { Component } from '@angular/core';
import {saveAs} from 'file-saver';
import {Subscription} from "rxjs";
import {DownloadPdfServiceService} from "./downloadPdfService.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private donwlaodPdf : DownloadPdfServiceService) {
  }
  private subscriptions: Subscription[] = [];

  title = 'demo';

  downloadFile(){
    console.log("donwloading pdf .......")
    this.subscriptions.push(
      this.donwlaodPdf.download().subscribe({
          next: (data:Blob) => {
            console.log("file downlaoded")
            saveAs(data,"test.pdf");
          },
        error: (error: any) => {
          console.log("error in download file ")
        }
      })
    );

  }
}
