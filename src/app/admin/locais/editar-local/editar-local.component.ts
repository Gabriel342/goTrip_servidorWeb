import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocaisService } from 'src/services/locais.service';
import { Local } from 'src/models/locais.model';

@Component({
  selector: 'app-editar-local',
  templateUrl: './editar-local.component.html',
  styleUrls: ['./editar-local.component.css']
})
export class EditarLocalComponent implements OnInit {

  local: Local = new Local();

  constructor(private service: LocaisService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(id)).subscribe(local => {
      this.local = local;
    });

  }

  atualizarLocal() {
    this.service.atualizar(this.local.id, this.local).subscribe(() => {
      this.router.navigate(['/admin/locais']);
    });
  }

}
