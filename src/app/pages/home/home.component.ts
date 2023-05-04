import { Component, OnInit } from '@angular/core';
import { Item } from '../../Interfaces/Item';
 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[] = [];

  constructor(){
    this.items = [
      {
        imagem: 'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png',
        titulo: 'Primeiro item',
        descricao: 'Descrição do primeiro item',
        Id : 2
      },
      {
        imagem: 'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png',
        titulo: 'Segundo item',
        descricao: 'Descrição do segundo item',
        Id : 3
      },
      {
        imagem: 'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png',
        titulo: 'Terceiro Item',
        descricao: 'Descrição do terceiro item',
        Id : 4
      }
    ];
    
  }
  ngOnInit(): void { 
  }
}
