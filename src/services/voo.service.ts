import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voo } from 'src/models/voo.model';

@Injectable({
  providedIn: 'root'
})
export class VooService {

  URL = "http://localhost:3001/voos"

  constructor(private http: HttpClient) { }

  listar() : Observable<Voo[]>{    
    return this.http.get<Voo[]>(this.URL);
  }

  buscarPorId(id : number): Observable<Voo>{
    return this.http.get<Voo>(this.URL + "/" + id)
  }

  incluir(voo : Voo): Observable<any>{
    return this.http.post<any>(this.URL, voo);
  }

  atualizar(idAtualizar: number, vooAlterado: Voo) : Observable<any> {
    return this.http.put<any>(this.URL + "/" + idAtualizar, vooAlterado);
  }

  excluir(id : number) : Observable<any>{
    return this.http.delete<any>(this.URL + "/" + id);
  }
}
