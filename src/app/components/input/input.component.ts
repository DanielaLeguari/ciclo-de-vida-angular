import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQuevaiSerEditado!: Item;

  valorItem!: string;
  constructor
    (
      private listaService: ListaDeCompraService
    ) { }

  ngOnInit(): void { }

  adicionarItem() {
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes['itemQuevaiSerEditado'].currentValue);
    if (!changes['itemQuevaiSerEditado'].firstChange) {
      this.valorItem = this.itemQuevaiSerEditado?.nome;
    }
  }
}
