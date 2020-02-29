import { Component, OnInit } from '@angular/core';
import { InspectOptions } from 'util';
declare var animate:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fit-train';
  ngOnInit(): void {
    animate();
  }
}
