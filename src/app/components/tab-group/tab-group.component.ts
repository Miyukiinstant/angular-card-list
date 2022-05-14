import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.sass']
})
export class TabGroupComponent implements OnInit{

  constructor() { }

  group: number = 0

  aboutActive: boolean = false
  title:string = ''
  router:boolean = true
  documentTitle(value:string): void{
    document.title = `Paws - ${value}`
  }

  toggleRouter(state:boolean):void {
    this.router= state
    
  }

  ngOnInit(): void {
    this.documentTitle('Clock')
  }

}
