import { PassagemService } from 'src/services/passagem.service';
import { Passagem } from 'src/models/passagem.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  passagens: Passagem[];
  passagensFiltradas: Passagem[];
  _id!: number;
  _origem: string = '';
  _destino!: string;
  _preco!: number;
  _taxas!: number;
  _qtde_pessoas!: number;

  get origem(){
    return this._origem;
  }

  set origem(valor: string){
    this._origem = valor;
    this.passagensFiltradas = this.filterPassagemByOrigem(valor);
  }

  constructor(private service: PassagemService, private actRoute: ActivatedRoute) {
    this.passagens = [];
    this.passagensFiltradas = [];
  }

  ngOnInit() {
    
    this.actRoute.queryParams.subscribe(params => {
      // this.origem = params['origem'];
      this._origem = params['origem'];
      console.log('parametros da URL:');
      console.log(params);
    });

    this.passagensFiltradas = this.passagens;
    console.log(this.passagensFiltradas);

  }

  filterPassagemByOrigem(termo: string){
    if(this.passagens.length === 0 || termo === ''){
      return this.passagens;
    } else {
      return this.passagens.filter((passagem) => {
        return passagem.origem.toLowerCase() === termo.toLowerCase();
      });
    }
  }
}
