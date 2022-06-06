import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Passagem } from '../models/passagem.model';

@Injectable({
  providedIn: 'root'
})
export class PassagemService {

  constructor(private http: HttpClient) { }

  URL_CADASTRO = "http://localhost:3000/passagens";
  // URL_UPLOAD = "http://localhost:3000/upload";

  listar() : Observable<Passagem[]> {
    let response = this.http.get<Passagem[]>(this.URL_CADASTRO);
    return response;
  }

  buscarPorCodigo(codigo : number) : Observable<Passagem> {
    const path = `${this.URL_CADASTRO}/${codigo}`;
    return this.http.get<Passagem>(path);
  }

  // fazerUploadDeImagemNoServidor(arquivo: File, nomeDaFoto: string){
  //   const formData = new FormData();
  //   formData.append('arquivo',  arquivo, nomeDaFoto);
  //   const upload = this.http.post(this.URL_UPLOAD, formData);
  //   upload.subscribe();
  // }

  incluir(passagem : Passagem) : Observable<any> {
    return this.http.post<Passagem>(this.URL_CADASTRO, passagem);
  }

  atualizar(passagem : Passagem) : Observable<any> {
    const path = `${this.URL_CADASTRO}/${passagem.codigo}`;
    return this.http.put<Passagem>(path, passagem);
  }

  excluir(codigo? : number) : Observable<any> {
    const path = `${this.URL_CADASTRO}/${codigo}`;
    return this.http.delete<Passagem>(path);
  }
}