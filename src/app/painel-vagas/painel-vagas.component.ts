import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {
    public vaga :Vaga = new Vaga(0,"","","",0);
  constructor(private _vagaService:VagasService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this._vagaService.cadastrarVaga(this.vaga).subscribe(
      vaga =>{this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("erro ao cadastrar vaga")}
    );

    window.location.href = "/mural";

  }

  atualizar(id:number){
    this._vagaService.atualizarVaga(id,this.vaga).subscribe(
      vaga =>{this.vaga = new Vaga(0,"","","",0)},
      err=> {console.log("erro ao atualizar")}
    );

    window.location.href="/mural";
  }
  excluir(id:number){
    this._vagaService.removerVaga(id).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0)},
      err =>{console.log("erro ao Excluir")}
    );

    window.location.href = "/mural";
  }

}
