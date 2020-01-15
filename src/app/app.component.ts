import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planigPoker';
  name: string;
  projectNum: string;
  estimate: string;

  estimating(est) {
    this.estimate = est;
    console.log(this.estimate);
  }



}
