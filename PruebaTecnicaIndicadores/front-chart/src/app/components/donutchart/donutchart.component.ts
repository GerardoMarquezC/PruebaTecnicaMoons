import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { color } from 'd3';
import { Datasource, Item } from '../../classes/datasource'
import { from } from 'rxjs';
@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DonutchartComponent implements OnInit, AfterViewInit {

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private dataSource: Datasource;
  private svg: any;
  private width: number;
  private height: number;
  private pie: any;
  private arc: any;
  private radius: number;
  private donutWidth: number = 12;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.createDonutChart();
    this.addChart();
    this.addText();
  }

  createDonutChart() {
    let element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth;
    this.height = element.offsetHeight;
    this.radius = Math.min(this.width, this.height) / 2;
    
    this.svg = d3.select(element)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("transform", "translate(" + this.width / 2 + "," +
        this.height / 2 + ")");

    this.arc = d3.arc()
      .innerRadius(this.radius - this.donutWidth) // NEW
      .outerRadius(this.radius);
    
      let color = d3.scaleOrdinal(this.dataSource.pallete);
    
    this.pie = d3.pie()
      .value(function (d: any) {
        return d.value;
      })
      .sort(null);

    this.svg.selectAll('path')
      .data(this.pie(this.dataSource.data))
      .enter()
      .append('path')
      .attr('d', this.arc)
      .attr('fill', function (d, i) {
        return color(d.data.key);
      });
  }

  getTotal(): string {
    return this.dataSource.data.map((i) => i.value).reduce((prev, next) => prev + next).toLocaleString(this.dataSource.locales, this.dataSource.numberOption);
  }

  getTitle(): string {
    return this.dataSource.title.toUpperCase();
  }

  addText(): void {
    this.svg.append("text")
      .attr("dy", "-1.5em")
      .style("text-anchor", "middle")
      .attr("class", "data")
      .text(this.getTitle());
    this.svg.append("text")
      .attr("dy", "0.0em")
      .style("text-anchor", "middle")
      .attr("class", "inside")
      .text(this.getTotal());
  }

  addChart(): void {
    var lineFunction = d3.line()
      .x(function (d: any) { return d.x; })
      .y(function (d: any) { return d.y; });
    // draw a circle
    this.svg.append("clipPath")       // define a clip path
      .attr("id", "circle") // give the clipPath an ID
      .append("circle")            // shape it as an ellipse
      .attr("cx", 0)            // position the x-centre
      .attr("cy", 0)            // position the y-centre
      .attr("r", this.radius - 20);

    this.svg.append("path")
      .attr("d", lineFunction(this.dataSource.points))
      .attr("clip-path", "url(#circle)")
      .attr("stroke", this.dataSource.pallete[0])
      .attr("stroke-width", 2)
      .attr("fill", this.dataSource.pallete[1])
      .attr("opacity", 0.5);
  }

}
