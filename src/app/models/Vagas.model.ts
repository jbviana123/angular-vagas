export class Vaga {
    id : number =0;
    nome:string ="";
    foto:string = "";
    salario:number=0;
    descricao:string="";

    constructor(id: number,nome: string ,foto:string, salario:number,descricao: string){
      this.id = id;
      this.nome=nome;
      this.foto=foto;
      this.salario=salario;
      this.descricao=descricao;
    }
}
