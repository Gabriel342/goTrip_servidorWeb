import { Perfil } from "./perfil.model";

export class Usuario{
    id: number = 0;
    perfil: Perfil = new Perfil();
    nome: string = '';
    email: string = '';
    senha: string = '';
    token: string = '';
}