import { Voo } from 'src/app/models/voo.model';

export class Passagem {
    //voo: Voo = new Voo;
    id: number = 0;
    origem: string = ''; //retirar
    destino: string = ''; //retirar
    preco: number = 0;
    taxas: number = 0;
    qtde_pessoas: number = 0;
    data_ida: Date = new Date(); //retiar
    data_volta: Date = new Date(); //retirar
}