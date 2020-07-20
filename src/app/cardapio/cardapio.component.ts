import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  cardapio = [
    {
      titulo: 'Toscana',
      subtitulo: 'Calabresa, mussarela',
      descricao: `Calabresa fatiada com mussarela e molho de tomate na base!`,
      img: '/assets/home.jpg'
    },
    {
      titulo: '4 Queijos',
      subtitulo: 'Mussarela, catupiry, provolone e gorgonzola',
      descricao: `Mussarela, catupiry, provolone e gorgonzola e molho de tomate na base!`,
      img: '/assets/home.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
