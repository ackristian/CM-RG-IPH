import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article, Newiph } from '../interfaces/news';

const apiKey = environment.ApiKey;
const url = environment.url;

@Injectable({
  providedIn: 'root',
})
export class IphserviceService {
  constructor(private http: HttpClient) {}

  getTodoas():Observable<Article[]> {
    return this.http.get<Newiph>(`${url}apiKey=${apiKey}`).pipe(
      map(({ articles }) => articles)
    );
  }
}
