import { Component, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.sass']
})
export class ClockComponent implements OnInit {

  constructor() { }
  show = false
  min:number = 0
  max:number = 60
  value:number = 0
  diameter:number = 190
  faClock = faClock;
  times = [
    {value:0},
    {value:0},
    {value:0}
  ]
  date = new Date();
  ngOnInit(): void {
    setInterval(()=>{
      this.date = new Date();
      this.times[0].value = new Date().getHours()
      this.times[1].value = new Date().getMinutes() 
      this.times[2].value = new Date().getSeconds() 
    },1000)
  }

}
