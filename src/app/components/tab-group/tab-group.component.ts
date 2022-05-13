import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent, MatTabGroup, MatTabNav, MatTabNavPanel } from '@angular/material/tabs';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.sass']
})
export class TabGroupComponent implements OnInit{

  constructor() { }

  group: number = 0

  tabs = ['Clock','Inspiro','Furtrack']
  
  selectionChange(): void{
    document.title = 'Paws - ' + this.tabs[this.group]
  }

  ngOnInit(): void {
    this.selectionChange()
  }

}
