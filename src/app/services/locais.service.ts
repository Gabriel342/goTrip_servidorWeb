import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Local } from '../models/locais.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {

  constructor(private http: HttpClient) { }

  URL_CADASTRO = "http://localhost:3000/locaisHome";
  // URL_UPLOAD = "http://localhost:3000/upload";

  listar() : Observable<Local[]> {
    let response = this.http.get<Local[]>(this.URL_CADASTRO);
    return response;
  }

  buscarPorCodigo(codigo : number) : Observable<Local> {
    const path = `${this.URL_CADASTRO}/${codigo}`;
    return this.http.get<Local>(path);
  }

  // fazerUploadDeImagemNoServidor(arquivo: File, nomeDaFoto: string){
  //   const formData = new FormData();
  //   formData.append('arquivo',  arquivo, nomeDaFoto);
  //   const upload = this.http.post(this.URL_UPLOAD, formData);
  //   upload.subscribe();
  // }

  incluir(local : Local) : Observable<any> {
    return this.http.post<Local>(this.URL_CADASTRO, local);
  }

  atualizar(local : Local) : Observable<any> {
    const path = `${this.URL_CADASTRO}/${local.codigo}`;
    return this.http.put<Local>(path, local);
  }

  excluir(codigo? : number) : Observable<any> {
    const path = `${this.URL_CADASTRO}/${codigo}`;
    return this.http.delete<Local>(path);
  }
}