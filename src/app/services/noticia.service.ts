import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private apiKey = 'd9d7dc9a3920438cbf6842cc8b42966c';
  private apiUrl = 'https://newsapi.org/v2/top-headlines'

  constructor(private http: HttpClient ) { }

  getNoticias(parametros:any):Observable<any> {
    const URL = `${this.apiUrl}?country=${parametros.pais}&category=${parametros.categoria}&apiKey=${this.apiKey}`;
    return this.http.get(URL)
  }
}
