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
  estimate: Int16Array;
  estimateAverage = 5;
  estLargeList: Array<string> = ['1', '5'];

  est8List: Array<string> = ['ania', 'hania'];
  est5List: Array<string> = ['piotrk', 'zosia'];
  est3List: Array<string> = ['dupa'];
  est2List: Array<string> = ['marysia'];
  est1List: Array<string> = ['marian', 'zdzichuadfafas', 'grzyna'];
  tasksList: Array<string> = ['dana1', 'dana2', 'dana3'];




  estimating(est) {
    this.estimate = est;
    console.log(this.estimate);
  }




}
