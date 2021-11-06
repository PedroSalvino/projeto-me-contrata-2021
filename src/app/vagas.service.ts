import { Injectable } from '@angular/core';

interface Vaga {
  id: number;
  nome: string;
  empresa: string;
  salario: number;
  horario: string;
  descricao: string;
}

@Injectable()
export class VagasService {
  listvagas: Array<Vaga> = [];
  constructor() {
    this.addVaga(13, 'Designer Gráfico', 'WPK', 2200.85, 'Noturno', '');
    this.addVaga(65, 'Assistente', 'WPK', 1989.84, 'Matutino', '');
  }

  addVaga(
    id: number,
    nome: string,
    empresa: string,
    salario: number,
    horario: string,
    descricao: string
  ) {
    this.listvagas.push({
      id: id,
      nome: nome,
      empresa: empresa,
      salario: salario,
      horario: horario,
      descricao: descricao,
    });
  }

  pesquisarVaga(pesquisa: string) {
    console.log(this.listvagas);
    console.log(
      this.listvagas.filter(
        (el) => el.nome.toLocaleUpperCase() == pesquisa.toUpperCase()
      )
    );
  }
}
