import { Cliente } from './clinte.model';
import { Passagem } from './passagem.model';

export class Viagens {
    id: number = 0;
    cliente: Cliente = new Cliente();
    passagem: Passagem = new Passagem();
}