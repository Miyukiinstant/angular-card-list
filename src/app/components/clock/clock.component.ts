import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.sass']
})
export class ClockComponent implements OnInit {

  constructor(private routes: ActivatedRoute,private title:Title) { }
  show = false
  min:number = 0
  max:number = 60
  value:number = 0
  diameter:number = 190
  faClock = faClock;
  spinner = {
    seconds: 0,
    minutes: 0,
    hours: 0,
  }
  date = new Date();
  ngOnInit(): void {
    this.routes.data.subscribe(title=>{
      this.title.setTitle(title['title'])
    })
    setInterval(()=>{
      this.date = new Date();
      this.spinner.seconds = new Date().getSeconds() * 100 / 60
      this.spinner.minutes = new Date().getMinutes() * 100 / 60
      this.spinner.hours = new Date().getHours() * 100 / 24
    },1000)
  }

}
