import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { TODOS } from '../mock-todo';


@Component({
  selector: 'app-shart-bar',
  templateUrl: './shart-bar.component.html',
  styleUrls: ['./shart-bar.component.css']
})
export class ShartBarComponent implements OnInit {
    title = 'Graficos de Tarefas'
  	todos = TODOS;
	public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [this.todos[0].description, this.todos[1].description, this.todos[2].description, this.todos[3].description, this.todos[4].description, this.todos[5].description, this.todos[6].description,this.todos[7].description,this.todos[8].description];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [this.todos[0].conclusion, this.todos[1].conclusion, this.todos[2].conclusion, this.todos[3].conclusion, this.todos[4].conclusion, this.todos[5].conclusion, this.todos[6].conclusion, this.todos[7].conclusion, this.todos[8].conclusion], label: 'Conclusão da Tarefa' },
  ];

  constructor() { }
  
  ngOnInit() {
  }

}
