import { VooService } from 'src/services/voo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voo } from 'src/models/voo.model';


@Component({
  selector: 'app-editar-voo',
  templateUrl: './editar-voo.component.html',
  styleUrls: ['./editar-voo.component.css']
})
export class EditarVooComponent implements OnInit {

  voo: Voo = new Voo();

  constructor(private service: VooService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(id)).subscribe(voo => {
      this.voo = voo;
    });

  }

  atualizarVoo() {
    this.service.atualizar(this.voo.id, this.voo).subscribe(() => {
      this.router.navigate(['/admin/voos']);
    });
  }

}
