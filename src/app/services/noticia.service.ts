import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient ) { }

  getNoticias(parametros:any):Observable<any> {
    const URL = `GET https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=d9d7dc9a3920438cbf6842cc8b42966c`;
    return this.http.get(URL)
  }
}
