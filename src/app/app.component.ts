import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ]
})
export class AppComponent {
  brands = [
    {
      name: 'Silvi Modas',
      image: 'url-a-la-imagen-1.jpg',
    },
    {
      name: 'Ropa Deportiva Pro',
      image: 'url-a-la-imagen-2.jpg',
    },
    {
      name: 'Ropa Deportiva Pro',
      image: 'url-a-la-imagen-2.jpg',
    },
    {
      name: 'Ropa Deportiva Pro',
      image: 'url-a-la-imagen-2.jpg',
    },
    {
      name: 'Ropa Deportiva Pro',
      image: 'url-a-la-imagen-2.jpg',
    },

    // Agrega más marcas según sea necesario
  ];
  
}
