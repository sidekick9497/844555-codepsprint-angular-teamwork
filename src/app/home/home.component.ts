import { Component, OnInit } from '@angular/core';
declare var animateLoading: any;
declare var animate: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    animateLoading();

    setTimeout(() => {
      animate();
    }, 3000);
  }


}
