import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.css']
})
export class MyheaderComponent implements OnInit {
  text:string = 'Meu Cabeçalho';
  constructor() { }

  ngOnInit() {
  }

}
