import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor(private http:HttpClient) { }

  obtenerData():Observable<any>
  {
    return this.http.get('./assets/data.json');
  }
}
