import { Component, OnInit } from '@angular/core';
import MenuData from "../../../assets/menu.json";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu = MenuData;
  constructor() { }

  ngOnInit() {
    MenuData.forEach(function (value) {
      console.log(value);
    }); 
  }

}
