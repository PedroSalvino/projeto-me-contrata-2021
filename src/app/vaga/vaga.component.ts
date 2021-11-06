import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css'],
})
export class VagaComponent implements OnInit {
  constructor(vagas: VagasService) {}

  ngOnInit() {}
}
