import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vaga[] = [];

  constructor(private _vagasService:VagasService) { }

  // responsavel por inicializar o projeto
  ngOnInit(): void {
    // o que estiver aqui dentro vai ser inicializado
    this.listarVagas();
  }

  listarVagas(){
    this._vagasService.getVagas()
    .subscribe(
      retornaVaga=>{
        this.vagas=retornaVaga.map(
          item=>{
            return new Vaga(
              item.id,
              item.nome,
              item.foto,
              item.salario,
              item.descricao

            );
          }
        )
      }
    )
  }

}
