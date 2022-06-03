import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passagem } from 'src/app/models/passagem.model';

@Injectable({
  providedIn: 'root'
})
export class PassagemService {

  URL = "http://localhost:3001/passagens"

  constructor(private http: HttpClient) { }

  listar(): Observable<Passagem[]> {
    return this.http.get<Passagem[]>(this.URL);
  }

  buscarPorId(id: number): Observable<Passagem> {
    return this.http.get<Passagem>(this.URL + "/" + id)
  }

  incluir(passagem: Passagem): Observable<any> {
    return this.http.post<any>(this.URL, passagem);
  }

  atualizar(idAtualizar: number, passagemAlterada: Passagem): Observable<any> {
    return this.http.put<any>(this.URL + "/" + idAtualizar, passagemAlterada);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + "/" + id);
  }
}
