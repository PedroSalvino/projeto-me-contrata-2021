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
  index: number = 0;
  constructor() {
    if (localStorage.getItem('vagas')) {
      this.listvagas = JSON.parse(localStorage.getItem('vagas'));
    } else {
      this.addVaga(
        13,
        'Designer Gráfico',
        'WPK',
        2200.85,
        'Noturno',
        'Área e especialização profissional: Artes - Artes Gráficas.   Nível hierárquico: Analista.  Local de trabalho: São Paulo, SP.  Regime de contratação de tipo Efetivo – CLT.    Jornada Período Integral. Atuar no desenvolvimento de material gráfico para midias sociais.'
      );
      this.addVaga(
        65,
        'Assistente Administrativo',
        'WPK',
        1989.84,
        'Matutino',
        ' Realizar atividades do setor administrativo, atendimento telefônico, auxilio no atendimento, planilhas de controle em Excel. Ter experiência na área administrativa, conhecimento em informática. Superior cursandoAtuará especifico na equipe de enfermagem. Outros requisitos: Habilidade em Excel.'
      );
      localStorage.setItem('vagas', JSON.stringify(this.listvagas));
    }
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

  getListaVagas() {
    this.listvagas = JSON.parse(localStorage.getItem('vagas'));
    return this.listvagas;
  }

  pesquisarVaga(pesquisa: string) {
    console.log(this.listvagas);
    console.log(
      this.listvagas.filter((el) =>
        el.nome.toLocaleUpperCase().includes(pesquisa.toUpperCase())
      )
    );
    if (this.listvagas.length != 0) {
      this.listaVagasPesquisa(pesquisa);
    }
  }

  listaVagasPesquisa(pesquisa: string) {
    return this.listvagas.filter((el) =>
      el.nome.toLocaleUpperCase().includes(pesquisa.toUpperCase())
    );
  }

  setIndex(numero: number) {
    this.index = numero;
    console.log(this.index);
  }
  getIndex() {
    return this.index;
  }

  getVaga(index: number) {
    return this.listvagas.filter((el) => el.id == index);
  }
}
