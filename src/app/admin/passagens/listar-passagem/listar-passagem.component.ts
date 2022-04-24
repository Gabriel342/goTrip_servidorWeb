import { Component, OnInit } from '@angular/core';
import { Passagem } from 'src/models/passagem.model';
import { PassagemService } from 'src/services/passagem.service';

@Component({
  selector: 'app-listar-passagem',
  templateUrl: './listar-passagem.component.html',
  styleUrls: ['./listar-passagem.component.css']
})

export class ListarPassagemComponent implements OnInit {

  passagens: Passagem[];
  colunas: string[] = ['id', 'origem', 'preco', 'taxas', 'qtde_pessoas', 'acoes'];

  constructor(private service: PassagemService) {
    this.passagens = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(passagem => {
      this.passagens = passagem;
    });
  }

}
