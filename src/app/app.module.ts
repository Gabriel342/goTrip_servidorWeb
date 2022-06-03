import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material Components
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { HttpClientModule } from "@angular/common/http";
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { IncluirVooComponent } from './admin/voos/incluir-voo/incluir-voo.component';
import { ListarVooComponent } from './admin/voos/listar-voo/listar-voo.component';
import { EditarVooComponent } from './admin/voos/editar-voo/editar-voo.component';
import { ExcluirVooComponent } from './admin/voos/excluir-voo/excluir-voo.component';
import { IncluirClienteComponent } from './admin/clientes/incluir-cliente/incluir-cliente.component';
import { ListarClienteComponent } from './admin/clientes/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './admin/clientes/editar-cliente/editar-cliente.component';
import { ExcluirClienteComponent } from './admin/clientes/excluir-cliente/excluir-cliente.component';
import { IncluirLocalComponent } from './admin/locais/incluir-local/incluir-local.component';
import { EditarLocalComponent } from './admin/locais/editar-local/editar-local.component';
import { ListarLocalComponent } from './admin/locais/listar-local/listar-local.component';
import { ExcluirLocalComponent } from './admin/locais/excluir-local/excluir-local.component';
import { IncluirViagemComponent } from './admin/viagens/incluir-viagem/incluir-viagem.component';
import { ListarViagemComponent } from './admin/viagens/listar-viagem/listar-viagem.component';
import { EditarViagemComponent } from './admin/viagens/editar-viagem/editar-viagem.component';
import { ExcluirViagemComponent } from './admin/viagens/excluir-viagem/excluir-viagem.component';
import { ExcluirPassagemComponent } from './admin/passagens/excluir-passagem/excluir-passagem.component';
import { EditarPassagemComponent } from './admin/passagens/editar-passagem/editar-passagem.component';
import { ListarPassagemComponent } from './admin/passagens/listar-passagem/listar-passagem.component';
import { IncluirPassagemComponent } from './admin/passagens/incluir-passagem/incluir-passagem.component';
import { BuscaComponent } from './busca/busca.component';
import { FormatoRealPipe } from './pipes/formato-real.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AdminComponent,
    LoginComponent,
    PesquisaComponent,
    IncluirVooComponent,
    ListarVooComponent,
    EditarVooComponent,
    ExcluirVooComponent,
    IncluirClienteComponent,
    ListarClienteComponent,
    EditarClienteComponent,
    ExcluirClienteComponent,
    IncluirLocalComponent,
    EditarLocalComponent,
    ListarLocalComponent,
    ExcluirLocalComponent,
    IncluirViagemComponent,
    ListarViagemComponent,
    EditarViagemComponent,
    ExcluirViagemComponent,
    IncluirPassagemComponent,
    ListarPassagemComponent,
    EditarPassagemComponent,
    ExcluirPassagemComponent,
    BuscaComponent,
    FormatoRealPipe,
    SearchFilterPipe
  ],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }