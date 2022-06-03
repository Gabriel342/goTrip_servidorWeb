import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Voo } from '../models/voo.model';

@Injectable({
  providedIn: 'root'
})
export class VooService {

  constructor(private http: HttpClient) { }

  URL_CADASTRO = "http://localhost:3000/voos";
  // URL_UPLOAD = "http://localhost:3000/upload";

  listar() : Observable<Voo[]> {
    let response = this.http.get<Voo[]>(this.URL_CADASTRO);
    return response;
  }

  buscarPorCodigo(codigo : number) : Observable<Voo> {
    const path = `${this.URL_CADASTRO}/${codigo}`;
    return this.http.get<Voo>(path);
  }

  // fazerUploadDeImagemNoServidor(arquivo: File, nomeDaFoto: string){
  //   const formData = new FormData();
  //   formData.append('arquivo',  arquivo, nomeDaFoto);
  //   const upload = this.http.post(this.URL_UPLOAD, formData);
  //   upload.subscribe();
  // }

  salvar(voo : Voo) : Observable<any> {
    return this.http.post<Voo>(this.URL_CADASTRO, voo);
  }

  atualizar(voo : Voo) : Observable<any> {
    const path = `${this.URL_CADASTRO}/${voo.codigo}`;
    return this.http.put<Voo>(path, voo);
  }

  excluir(codigo? : number) : Observable<any> {
    const path = `${this.URL_CADASTRO}/${codigo}`;
    return this.http.delete<Voo>(path);
  }
}