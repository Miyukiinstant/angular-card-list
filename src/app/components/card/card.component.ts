import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

export class CardComponent implements OnInit {

  constructor(private httpclient:HttpClient) { }
  imgSrc = ''
  min = 0
  max = 60
  value = 0
  diameter = 190
  spinner = {
    seconds: 0,
    minutes: 0,
    hours: 0,
  }
  date = new Date();
  ngOnInit(): void {
    fetch('http://localhost/').then(async response=>{
      const result = await response.json()
      this.imgSrc = result.url
    })
    setInterval(()=>{
      this.date = new Date();
      this.spinner.seconds = new Date().getSeconds() * 100 / 60
      this.spinner.minutes = new Date().getMinutes() * 100 / 60
      this.spinner.hours = new Date().getHours() * 100 / 24
    },1000)
  }

}
