import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

import { EditarClienteComponent } from './admin/clientes/editar-cliente/editar-cliente.component';
import { ExcluirClienteComponent } from './admin/clientes/excluir-cliente/excluir-cliente.component';
import { IncluirClienteComponent } from './admin/clientes/incluir-cliente/incluir-cliente.component';
import { ListarClienteComponent } from './admin/clientes/listar-cliente/listar-cliente.component'
import { EditarLocalComponent } from './admin/locais/editar-local/editar-local.component';
import { ExcluirLocalComponent } from './admin/locais/excluir-local/excluir-local.component';
import { IncluirLocalComponent } from './admin/locais/incluir-local/incluir-local.component';
import { ListarLocalComponent } from './admin/locais/listar-local/listar-local.component';
import { EditarVooComponent } from './admin/voos/editar-voo/editar-voo.component';
import { ExcluirVooComponent } from './admin/voos/excluir-voo/excluir-voo.component';
import { IncluirVooComponent } from './admin/voos/incluir-voo/incluir-voo.component';
import { ListarVooComponent } from './admin/voos/listar-voo/listar-voo.component';
import { EditarPassagemComponent } from './admin/passagens/editar-passagem/editar-passagem.component';
import { ExcluirPassagemComponent } from './admin/passagens/excluir-passagem/excluir-passagem.component';
import { IncluirPassagemComponent } from './admin/passagens/incluir-passagem/incluir-passagem.component';
import { ListarPassagemComponent } from './admin/passagens/listar-passagem/listar-passagem.component';
import { ExcluirViagemComponent } from './admin/viagens/excluir-viagem/excluir-viagem.component';
import { IncluirViagemComponent } from './admin/viagens/incluir-viagem/incluir-viagem.component';
import { ListarViagemComponent } from './admin/viagens/listar-viagem/listar-viagem.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
  
    path: 'admin', component: AdminComponent,
    children: [

      //clientes
      { path: 'clientes', component: ListarClienteComponent },
      { path: 'clientes/incluir', component: IncluirClienteComponent },
      { path: 'clientes/excluir/:id', component: ExcluirClienteComponent },
      { path: 'clientes/editar/:id', component: EditarClienteComponent },

      //voos
      { path: 'voos', component: ListarVooComponent },
      { path: 'voos/incluir', component: IncluirVooComponent },
      { path: 'voos/excluir/:id', component: ExcluirVooComponent },
      { path: 'voos/editar/:id', component: EditarVooComponent },

      //passagens
      { path: 'passagens', component: ListarPassagemComponent },
      { path: 'passagens/incluir', component: IncluirPassagemComponent },
      { path: 'passagens/excluir/:id', component: ExcluirPassagemComponent },
      { path: 'passagens/editar/:id', component: EditarPassagemComponent },

      //viagens
      { path: 'viagens', component: ListarViagemComponent },
      { path: 'viagens/incluir', component: IncluirViagemComponent },
      { path: 'viagens/excluir/:id', component: ExcluirViagemComponent },
      { path: 'viagens/editar/:id', component: ListarViagemComponent },

      //locais
      { path: 'locais', component: ListarLocalComponent },
      { path: 'locais/incluir', component: IncluirLocalComponent },
      { path: 'locais/excluir/:id', component: ExcluirLocalComponent },
      { path: 'locais/editar/:id', component: EditarLocalComponent },

    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'pesquisa', component: PesquisaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
