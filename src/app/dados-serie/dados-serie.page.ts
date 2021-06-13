import { ISerie } from './../models/ISerie.model';
import { Dados2Service } from './../services/dados2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {

  serie: ISerie;

  constructor(public dados2Service: Dados2Service) { }

  ngOnInit() {
    this.serie = this.dados2Service.pegarDados('serie');
    console.log('Serie enviada', this.serie);


  }

}
