import { Component, OnInit } from '@angular/core';

declare var require: any;
const data: any = require('../../../shared/contracts.json');
@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.css']
})
export class ContractsListComponent implements OnInit {
  /**
   1: ainda não fez nada
   2: fechado - Em aberto
   3: fechado - Expirado
   4: recusado
   */

   tableStyle = 'bootstrap';


  editing: any = {};
  rows: any = new Array;
  temp = [...data];


  constructor() { 
    this.rows = data;
    this.temp = [...data];
    console.log(this.temp);
    
  }

  ngOnInit(): void {
  }


  switchExpand(contract: any){
    contract.expand = !contract.expand;
  }

  openPdf(){
    window.open('https://www.gov.br/mre/pt-br/arquivos/documentos/licitacoes/coordenacao-geral-de-recursos-logisticos/contratotraducoesgrp.pdf', '_blank');
  }
}
