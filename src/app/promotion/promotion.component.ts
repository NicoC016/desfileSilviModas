import { Component } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.sass'],
})
export class PromotionComponent {
  public isMobile:any;

  ngOnInit(): void {
    this.isMobile = navigator.userAgent.includes('Mobile');
  }
}
