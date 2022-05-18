import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { InspirobotService } from 'src/app/services/inspirobot/inspirobot.service';
import { Urls } from 'src/app/interfaces/urls';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

export class CardComponent implements OnInit {

  constructor(private inspiro:InspirobotService) { }
  imgSrc: string | undefined
  show = false
  getImage(): void{
    this.inspiro.getImage().subscribe(result=>{
      this.imgSrc = result.url
    })
    this.show = true
  }

  ngOnInit(): void {
  }

}
