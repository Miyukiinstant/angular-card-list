import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor(private routes: ActivatedRoute,private title:Title) { }
  ngOnInit(): void {
    this.routes.data.subscribe(title=>{
      this.title.setTitle(title['title'])
    })
  }

}
