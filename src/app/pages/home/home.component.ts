import { Component, OnInit } from '@angular/core';
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { TitleComponent } from "../../components/title/title.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";

@Component({
  selector: 'app-home',
  imports: [BigCardComponent, TitleComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

}
