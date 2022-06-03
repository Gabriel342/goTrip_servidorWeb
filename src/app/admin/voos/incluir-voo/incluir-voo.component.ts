import { Voo } from 'src/app/models/voo.model';
import { VooService } from 'src/app/services/voo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir-voo',
  templateUrl: './incluir-voo.component.html',
  styleUrls: ['./incluir-voo.component.css']
})
export class IncluirVooComponent implements OnInit {

  voo: Voo = new Voo();

  constructor(private service: VooService, private router: Router) { }

  salvarVoo(){
    this.service.salvar(this.voo).subscribe(() => {
      this.router.navigate(['/admin/voos']);
    });
  }

  ngOnInit(): void {
  }

}
