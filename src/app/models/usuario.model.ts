import { dateInputsHaveChanged } from "@angular/material/datepicker/datepicker-input-base";
import { Perfil } from "./perfil.model";

export class Usuario{
    codigo: number = 0;
    perfil: Perfil = new Perfil();
    nome: string = '';
    email: string = '';
    senha: string = '';
    token: string = '';
    dataCriacao: Date = new Date();
}