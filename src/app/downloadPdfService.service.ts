import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class DownloadPdfServiceService {
  private baseUrl = "https://skolistic.com/app/test/BE/public/bults/1re-Maturit-Commerce-BICHARA-Niels-2023-2024-B1-1.pdf";

  constructor(private http: HttpClient) { }

  public download() {
    return this.http.get(this.baseUrl,{responseType: 'blob'})
  }
}
