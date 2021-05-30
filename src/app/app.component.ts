import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Generated by https://quicktype.io

export interface Competitors {
    competitors: Competitor[];
}

export interface Competitor {
    login:      boolean;
    _id:        string;
    name:       string;
    surname:    string;
    age:        number;
    telephone:  string;
    cellphone:  string;
    address:    string;
    city:       string;
    country:    string;
    password:   string;
    producto:   Producto[];
    created_at: string;
    updated_at: string;
    __v:        number;
}

export interface Producto {
    _id:          ID;
    name:         Name;
    brand:        Brand;
    purchaseDate: string;
}

export enum ID {
    The608Dbaffe4F77018E5408E91 = "608dbaffe4f77018e5408e91",
    The608Dbb36E4F77018E5408E92 = "608dbb36e4f77018e5408e92",
    The608Dbb3Be4F77018E5408E93 = "608dbb3be4f77018e5408e93",
}

export enum Brand {
    Audi = "audi",
    Mazda = "mazda",
    Toyota = "toyota",
}

export enum Name {
    Auto = "auto",
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  competitors: Competitor[] = [];
  url = "https://architecturerestserver.herokuapp.com/api/competitor/all/"
  keys:string[] = [];

  constructor( private http: HttpClient ) {

    this.http.get(`${ this.url }`)
    .subscribe(( data: any ) => {
      const info: Competitors = data;
      this.competitors = info.competitors;
      this.keys = Object.keys( this.competitors[0] ).filter(( key:string ) => {
        return key !== "login" && key !== "password"
            && key !== "created_at"
            && key !== "updated_at"
            && key !== "__v"
            && key !== "producto"
      });
      console.log( this.keys );
    });
  }

}
