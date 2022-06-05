import { PassagemService } from 'src/app/services/passagem.service';
import { Passagem } from 'src/app/models/passagem.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  // searchText: string = '';
  fieldOrigem: string = 'origem';
  fieldDestino: string = 'destino';
  passagens: Passagem[];

  origemInput: string = '';
  destinoInput: string = '';
  isIdaVoltaInput: boolean | null = true;
  idaInput: string | null = null;
  voltaInput: string | null = null;


  constructor(private service: PassagemService, private route: ActivatedRoute) {
    this.passagens = [];
  }

  ngOnInit(): void {
    console.log(this.fieldOrigem);

    //

    this.route.queryParamMap
      .subscribe(params => {
        this.origemInput = params.get('origem') || '';
        this.destinoInput = params.get('destino') || '';
        this.isIdaVoltaInput = Boolean(params.get('idaVolta')) || false;
        this.idaInput = params.get('ida') || '';
        this.voltaInput = params.get('volta') || '';
        console.log(`'Query params:' origem:${this.origemInput} - destino:${this.destinoInput} - éIdaEVolta:${this.isIdaVoltaInput} - dataIda:${this.idaInput} - dataVolta:${this.voltaInput}`);
      });

    //
    this.service.listar().subscribe(passagem => {
      this.passagens = passagem;
    });
  }

}
