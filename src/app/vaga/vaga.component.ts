import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css'],
})
export class VagaComponent implements OnInit {
  index: number = 0;
  constructor(public vagas: VagasService) {
    this.index = vagas.getIndex();
  }

  ngOnInit() {}

  getVaga(index: number) {
    return this.vagas.getVaga(index);
  }
}
