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
      name: 'algoMasQueVendimia',
      image: '../assets/img/logos/logo_algoMasQueVendimia.png',
      url:'https://www.instagram.com/algomasquevendimia'
    },
    {
      name: 'Silvi Modas',
      image: '../assets/img/logos/logo_silviModas.png',
    },
    {
      name: 'Elba maquillaje social',
      image: '../assets/img/logos/logo_elba.png',
    },
    {
      name: 'Daniel Ortiz',
      image: '../assets/img/logos/logo_daniel-ortiz.png',
    },
    {
      name: 'Madreluna',
      image: '../assets/img/logos/logo_madreluna.png',
    },
    {
      name: 'Cin Zandri',
      image: '../assets/img/logos/logo_cin-zandri.png',
    },
    {
      name: 'Grinchuza',
      image: '../assets/img/logos/logo_grinchuza.png',
    },
    {
      name: 'Genial coquimbito',
      image: '../assets/img/logos/logo_genial-coquimbito.png',
    },
  ];
  
}
