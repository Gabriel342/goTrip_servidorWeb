import { Voo } from 'src/app/models/voo.model';
import { VooService } from 'src/app/services/voo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-voo',
  templateUrl: './listar-voo.component.html',
  styleUrls: ['./listar-voo.component.css']
})
export class ListarVooComponent implements OnInit {

  voos: Voo[];
  colunas: string[] = ['id', 'origem', 'destino', 'data_ida', 'data_volta', 'acoes'];

  constructor(private service: VooService) {
    this.voos = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(voo => {
      this.voos = voo;
    });
  }

}
