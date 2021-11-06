import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-area-vagas',
  templateUrl: './area-vagas.component.html',
  styleUrls: ['./area-vagas.component.css'],
})
export class AreaVagasComponent implements OnInit {
  pesquisa: string;

  constructor(public vagas: VagasService) {}

  ngOnInit() {}
}
