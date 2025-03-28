import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})

export class BigCardComponent implements OnInit {

  @Input() imgCover:string = '';
  @Input() title:string = '';
  @Input() description:string = '';

  constructor() { }
  ngOnInit(): void { }

}
