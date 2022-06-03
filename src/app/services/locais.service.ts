import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Local } from '../models/locais.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {

  URL = "http://localhost:3001/locais"

  constructor(private http: HttpClient) { }

  listar(): Observable<Local[]> {
    return this.http.get<Local[]>(this.URL);
  }

  buscarPorId(id: number): Observable<Local> {
    return this.http.get<Local>(this.URL + "/" + id)
  }

  incluir(local: Local): Observable<any> {
    return this.http.post<any>(this.URL, local);
  }

  atualizar(idAtualizar: number, localAlterado: Local): Observable<any> {
    return this.http.put<any>(this.URL + "/" + idAtualizar, localAlterado);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + "/" + id);
  }
}