import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, Routes} from '@angular/router';


@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.sass']
})


export class TabGroupComponent implements OnInit{

  constructor(private _routes: Router, private title:Title) { }
  routes: any
  setTitle(title:string): void{
    this.title.setTitle(title)
  }
  
  getTitle(): Title{
    return this.title
  }
  ngOnInit(): void {
    this.routes = this._routes.config
  }

}