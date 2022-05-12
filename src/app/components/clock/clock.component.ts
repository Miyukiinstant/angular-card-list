import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.sass']
})
export class ClockComponent implements OnInit {

  constructor() { }
  imgSrc: string = ''
  show = false
  min:number = 0
  max:number = 60
  value:number = 0
  diameter:number = 190
  spinner = {
    seconds: 0,
    minutes: 0,
    hours: 0,
  }
  date = new Date();
  ngOnInit(): void {
    setInterval(()=>{
      this.date = new Date();
      this.spinner.seconds = new Date().getSeconds() * 100 / 60
      this.spinner.minutes = new Date().getMinutes() * 100 / 60
      this.spinner.hours = new Date().getHours() * 100 / 24
    },1000)
  }

}
