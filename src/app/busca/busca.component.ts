import { PassagemService } from 'src/app/services/passagem.service';
import { Passagem } from 'src/app/models/passagem.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  searchText: string = '';
  field: string = 'origem';
  passagens: Passagem[];

  constructor(private service: PassagemService) {
    this.passagens = [];
  }

  ngOnInit(): void {
    console.log(this.field);
    this.service.listar().subscribe(passagem => {
      this.passagens = passagem;
    });
  }

}
