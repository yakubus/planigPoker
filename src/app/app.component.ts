import { mongodb } from 'node_modules/mongodb';
import { Component } from '@angular/core';

const url = 'mongodb://127.0.0.1:27017';
const dbname = 'mongo-test';


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
    @mongodb.connect(url, {} , (error, client) => {
      if (error) {
        console.log(error);
      }
      console.log('db is ok');

      } )
  }




}
