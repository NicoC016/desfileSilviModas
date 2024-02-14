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
      url:'https://www.instagram.com/silvimodas'
    },
    {
      name: 'Paseo Ruttini',
      image: '../assets/img/logos/logo_paseo.png',
      url:''
    },
    {
      name: 'algoMasQueVendimia',
      image: '../assets/img/logos/logo_algoMasQueVendimia.png',
      url:'https://www.instagram.com/algomasquevendimia'
    },
    {
      name: 'Rapsodia',
      image: '../assets/img/logos/logo_rapsodia.png',
      url:'https://www.instagram.com/rapsodia_art_deco'
    },
    {
      name: 'Elba maquillaje social',
      image: '../assets/img/logos/logo_elba.png',
      url:'https://api.whatsapp.com/send?phone=2615081805',
    },
    {
      name: 'Daniel Ortiz',
      image: '../assets/img/logos/logo_daniel-ortiz.png',
      url:'',
    },
    {
      name: 'Madreluna',
      image: '../assets/img/logos/logo_madreluna.png',
      url:'https://www.instagram.com/madreluna.mza'
    },
    {
      name: 'Cin Zandri',
      image: '../assets/img/logos/logo_cin-zandri.png',
      url:'https://www.instagram.com/cin.zandri'
    },
    {
      name: 'Grinchuza',
      image: '../assets/img/logos/logo_grinchuza.png',
      url:'https://www.instagram.com/Grinchuza'
    },
    {
      name: 'Genial coquimbito',
      image: '../assets/img/logos/logo_genial-coquimbito.png',
      url:'https://www.instagram.com/genial_coquimbito'
    },
    {
      name: 'Carolina',
      image: '../assets/img/logos/logo_carolina.jpg',
      url:'https://api.whatsapp.com/send?phone=2615681703'
    },
    {
      name: 'Lucentini',
      image: '../assets/img/logos/logo_lucentini.png',
      url:'https://www.lucentinimuebles.com.ar/'
    },
    {
      name: 'Andrea ochiuto',
      image: '../assets/img/logos/logo_andrea-ochiuto.jpg',
      url:'https://www.instagram.com/sentirtebien1985'
    },
    {
      name: 'Grido',
      image: '../assets/img/logos/logo_grido.jpg',
      url:'https://www.instagram.com/grido.coquimbito'
    },
    //{
      //name: 'Todo cell',
      //image: '../assets/img/logos/logo_todo-cell.jpg',
      //url:'#'
    //},
    
  ];
  
}
