import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import { LoginService } from 'src/app/services/orari/login.service';
import { Urls } from 'src/app/interfaces/urls';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orari',
  templateUrl: './orari.component.html',
  styleUrls: ['./orari.component.sass'],
  providers: [Urls]
})
export class OrariComponent implements OnInit {

  constructor(private login:LoginService) { }
  showIframe:boolean = false

  verifyPassword(value:string): void{
    this.login.getLogin(Number(value)).subscribe(login=>{
      this.showIframe = login.login
    })
  }
  ngOnInit(): void {
  }

}
