import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VooService } from 'src/app/services/voo.service';
import { Voo } from 'src/app/models/voo.model';

@Component({
  selector: 'app-excluir-voo',
  templateUrl: './excluir-voo.component.html',
  styleUrls: ['./excluir-voo.component.css']
})
export class ExcluirVooComponent implements OnInit {

  voo: Voo = new Voo();

  constructor(private service: VooService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.buscarPorCodigo(Number(id)).subscribe(voo => {
      this.voo = voo;
    });

  }

  excluirVoo() {
    this.service.excluir(this.voo.codigo).subscribe(() => {
      this.router.navigate(['/admin/voos']);
    });
  }

}
