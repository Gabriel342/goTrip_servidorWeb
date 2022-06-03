import { Cliente } from 'src/app/models/clinte.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir-cliente',
  templateUrl: './incluir-cliente.component.html',
  styleUrls: ['./incluir-cliente.component.css']
})
export class IncluirClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private service: ClienteService, private router: Router) { }

  salvarCliente(){
    this.service.salvar(this.cliente).subscribe(() => {
      this.router.navigate(['/admin/clientes']);
    });
  }

  ngOnInit(): void {
  }

}