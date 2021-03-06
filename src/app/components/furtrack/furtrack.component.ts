import { Component, OnInit } from '@angular/core';
import { FurtrackService } from 'src/app/services/futrack/furtrack.service';

@Component({
  selector: 'app-furtrack',
  templateUrl: './furtrack.component.html',
  styleUrls: ['./furtrack.component.sass']
})

export class FurtrackComponent implements OnInit {

  constructor(private furtrack:FurtrackService) { }
  href: string = ''
  imgSrc: string = ''
  show = false

  getImage(): void{
    this.show = true
    this.furtrack.getImage().subscribe(result=>{
      this.imgSrc = result.url
      this.href = result.origin
    })
  }

  ngOnInit(): void {

  }

}
