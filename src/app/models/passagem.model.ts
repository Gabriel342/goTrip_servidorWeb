export class Passagem {
    //voo: Voo = new Voo;
    codigo: number = 0;
    origem: string = '';
    destino: string = '';
    data_ida: Date = new Date();
    data_volta: Date = new Date();
    preco: number = 0;
    taxas: number = 0;
    qtde_pessoas: number = 0;
}