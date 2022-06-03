import { Usuario } from 'src/app/models/usuario.model';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    usuarioLogado: Usuario = new Usuario();;
    URL_AUTH = "http://localhost:3000/auth";

    public isAutenticado(): boolean {
        return this.usuarioLogado.codigo > 0;
    }

    public isAdmin(): boolean {
        const papel = this.usuarioLogado.perfil.papel;
        return this.isAutenticado() && papel === "admin";
    }

    constructor(private http: HttpClient, private location: Location) { }

    login(email: string, senha: string): Observable<Usuario> {
        return this.http.post<Usuario>(this.URL_AUTH, { email: email, senha: senha })
            .pipe(tap(usuario => this.usuarioLogado = usuario));
    }

    logout() {
        try {
            this.usuarioLogado = new Usuario();
            this.location.back();
        } catch (err) {
            console.error(err);
        }
    }
}
