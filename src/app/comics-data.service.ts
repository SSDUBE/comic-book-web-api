import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Md5} from "md5-typescript";

let publicKey = '8716acba396572d1fadc17fb824aa490';
let privateKey = '7d659b07704d0849baa7bd379f138c80113af1c6';
let timestamp = Math.random();
let md5Hashed = Md5.init(timestamp + privateKey + publicKey);

console.log(md5Hashed);

@Injectable({
  providedIn: 'root'
})

export class ComicsDataService {

  url = `http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hashed}`;

  constructor(private http: HttpClient) { }

  getComics() {
    return this.http.get(this.url);
  }
}