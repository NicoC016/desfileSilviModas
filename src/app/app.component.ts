import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  public isMobile = false;
  ngOnInit(): void {
    this.isMobile = navigator.userAgent.includes('Mobile');
  }
  
}
