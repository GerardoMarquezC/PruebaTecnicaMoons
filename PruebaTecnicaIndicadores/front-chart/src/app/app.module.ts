import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndicadorComponent } from './components/indicador/indicador.component';
import { DonutchartComponent } from './components/donutchart/donutchart.component';
import { LegendIndicatorComponent } from './components/legend-indicator/legend-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    IndicadorComponent,
    DonutchartComponent,
    LegendIndicatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
