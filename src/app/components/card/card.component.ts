import { Component, OnInit } from '@angular/core';
import { InspirobotService } from 'src/app/services/inspirobot/inspirobot.service';

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
      //const res = JSON.parse(JSON.stringify(result))
      this.imgSrc = result.url
    })
    this.show = true
  }

  ngOnInit(): void {
  }

}
