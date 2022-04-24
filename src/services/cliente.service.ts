import { Cliente } from '../models/clinte.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  URL = "http://localhost:3001/clientes";

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.URL);
  }

  buscarPorId(id : number): Observable<Cliente>{
    return this.http.get<Cliente>(this.URL + "/" + id);
  }

  incluir(cliente : Cliente): Observable<any>{
    return this.http.post<any>(this.URL, cliente);
  }

  atualizar(idAtualizar: Number, clienteAlterado: Cliente) : Observable<any> {
    return this.http.put<any>(this.URL + "/" + idAtualizar, clienteAlterado);
  }

  excluir(id : number) : Observable<any>{
    return this.http.delete<any>(this.URL + "/" + id);
  }
}
