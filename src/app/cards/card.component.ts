import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1500ms', style({ opacity: 0 })),
      ]),
    ]),
  ]
})
export class CardComponent {
  brands = [
    {
      name: 'Silvi Modas',
      image: '../assets/img/logos/logo_silviModas.png',
      url:'https://www.instagram.com/algomasquevendimia'
    },
    {
      name: 'algoMasQueVendimia',
      image: '../assets/img/logos/logo_algoMasQueVendimia.png',
      url:'https://www.instagram.com/algomasquevendimia'
    },
    {
      name: 'Paseo Ruttini',
      image: '../assets/img/logos/logo_paseo.png',
      url:'https://www.instagram.com/algomasquevendimia'
    },
    {
      name: 'Elba maquillaje social',
      image: '../assets/img/logos/logo_elba.png',
      url:'https://www.instagram.com/algomasquevendimia',
    },
    {
      name: 'Daniel Ortiz',
      image: '../assets/img/logos/logo_daniel-ortiz.png',
      url:'https://www.instagram.com/algomasquevendimia',
    },
    {
      name: 'Madreluna',
      image: '../assets/img/logos/logo_madreluna.png',
      url:'https://www.instagram.com/algomasquevendimia'
    },
    {
      name: 'Cin Zandri',
      image: '../assets/img/logos/logo_cin-zandri.png',
      url:'https://www.instagram.com/algomasquevendimia'
    },
    {
      name: 'Grinchuza',
      image: '../assets/img/logos/logo_grinchuza.png',
      url:'https://www.instagram.com/algomasquevendimia'
    },
    {
      name: 'Genial coquimbito',
      image: '../assets/img/logos/logo_genial-coquimbito.png',
      url:'https://www.instagram.com/algomasquevendimia'
    },
  ];
  
}
