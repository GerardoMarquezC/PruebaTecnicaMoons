import { Component, OnInit } from '@angular/core';
import { Item, Datasource, Point } from './classes/datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  arrayData: Array<Datasource> = [];
  ngOnInit(): void {
    this.generateData();
  }
  generateData() {
    let array: Array<Item> = [];
    array.push(new Item("Smartphone", 8000, "#336A29"));
    array.push(new Item("Tablet", 12000, "#80B155"));

    let numberOptions: Intl.NumberFormatOptions = {};
    numberOptions.style = 'currency';
    numberOptions.currency = 'EUR';
    numberOptions.minimumFractionDigits = 0;
    let lineData: Array<Point> = [
      { "x": -100, "y": 100 },
      { "x": -90, "y": 60 },
      { "x": -75, "y": 58 },
      { "x": -60, "y": 20 },
      { "x": 20, "y": 20 },
      { "x": 40, "y": 10 },
      { "x": 60, "y": 40 },
      { "x": 80, "y": 5 },
      { "x": 100, "y": 60 },
      { "x": 100, "y": 100 }];

    let lineData2: Array<Point> = [
      { "x": -100, "y": 100 },
      { "x": -100, "y": 90 },
      { "x": -75, "y": 58 },
      { "x": -60, "y": 20 },
      { "x": -40, "y": 40 },
      { "x": -20, "y": 30 },
      { "x": 30, "y": 10 },
      { "x": 60, "y": 40 },
      { "x": 80, "y": 5 },
      { "x": 100, "y": 60 },
      { "x": 100, "y": 100 }];

    let lineData3: Array<Point> = [
      { "x": -100, "y": 100 },
      { "x": -100, "y": 5 },
      { "x": -75, "y": 30 },
      { "x": -60, "y": 20 },
      { "x": -40, "y": 40 },
      { "x": -20, "y": 10 },
      { "x": 30, "y": 20 },
      { "x": 60, "y": 10 },
      { "x": 70, "y": 20 },
      { "x": 80, "y": 5 },
      { "x": 100, "y": 60 },
      { "x": 100, "y": 100 }];
    let dataSource = new Datasource(array, "Revenue", numberOptions, 'de-DE', lineData);
    this.arrayData.push(dataSource);


    let array2: Array<Item> = [];
    array2.push(new Item("Smartphone", 30000000, "#164267"));
    array2.push(new Item("Tablet", 20000000, "#537FA8"));

    let numberOptions2: Intl.NumberFormatOptions = {};
    numberOptions2.currency = 'EUR';
    numberOptions2.minimumFractionDigits = 0;
    let dataSource2 = new Datasource(array2, "Impresions", numberOptions2, 'de-DE', lineData2);
    this.arrayData.push(dataSource2);

    let array3: Array<Item> = [];
    array3.push(new Item("Smartphone", 120000000, "#EE7804"));
    array3.push(new Item("Tablet", 480000000, "#FB9D14"));

    let numberOptions3: Intl.NumberFormatOptions = {};
    numberOptions3.currency = 'EUR';
    numberOptions3.minimumFractionDigits = 0;
    let dataSource3 = new Datasource(array3, "Visit", numberOptions3, 'de-DE', lineData3);
    this.arrayData.push(dataSource3);
  }
}
