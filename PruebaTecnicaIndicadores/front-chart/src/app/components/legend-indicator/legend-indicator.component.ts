import { Component, OnInit, Input } from '@angular/core';
import { Datasource } from '../../classes/datasource';

@Component({
  selector: 'app-legend-indicator',
  templateUrl: './legend-indicator.component.html',
  styleUrls: ['./legend-indicator.component.scss']
})
export class LegendIndicatorComponent implements OnInit {
  @Input() private dataSource: Datasource;
  data :Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.processData();
  }

  processData(): void {
    let total = this.dataSource.data.map((i)=> i.value).reduce((a,b) => a +b);
    this.data = this.dataSource.data.map((i) =>  {
      var item: any = {};
      item.color = i.color;
      item.key = i.key;
      item.value = i.value.toLocaleString(this.dataSource.locales, this.dataSource.numberOption);
      item.percent = (i.value/total).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
      return item;
    });
  };
}
