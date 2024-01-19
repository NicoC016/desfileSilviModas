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
      image: '../assets/img/logo_silviModas.png',
    },
    {
      name: 'Ropa Deportiva Pro',
      image: '../assets/img/logo_silviModas.png',
    },
    {
      name: 'Ropa Deportiva Pro',
      image: '../assets/img/logo_silviModas.png',
    },
    {
      name: 'Ropa Deportiva Pro',
      image: '../assets/img/logo_silviModas.png',
    },
    {
      name: 'Ropa Deportiva Pro',
      image: '../assets/img/logo_silviModas.png',
    },
    {
      name: 'Ropa Deportiva Pro',
      image: '../assets/img/logo_silviModas.png',
    },
  ];
  
}
