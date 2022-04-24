
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Passagem } from 'src/models/passagem.model';
import { PassagemService } from 'src/services/passagem.service';

@Component({
  selector: 'app-excluir-passagem',
  templateUrl: './excluir-passagem.component.html',
  styleUrls: ['./excluir-passagem.component.css']
})
export class ExcluirPassagemComponent implements OnInit {

  passagem: Passagem = new Passagem();

  constructor(private service: PassagemService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(id)).subscribe(passagem => {
      this.passagem = passagem;
    });

  }

  excluirPassagem() {
    this.service.excluir(this.passagem.id).subscribe(() => {
      this.router.navigate(['/admin/passagens']);
    });
  }

}
