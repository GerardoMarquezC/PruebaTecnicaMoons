import { Component, OnInit, Input } from '@angular/core';
import { Datasource, Item } from '../../classes/datasource';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss']
})
export class IndicadorComponent implements OnInit {
  @Input() dataSource: Datasource;
  constructor() { }

  ngOnInit(): void {
  }
}
