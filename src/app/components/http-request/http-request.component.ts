import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {

  constructor( private http: HttpClient ) {
    this.http
    .get('http://localhost/api/date/all/')
    .subscribe((data) => {
      console.log(data);
    })
    
  }

  ngOnInit(): void {
  }

}
