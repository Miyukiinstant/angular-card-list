import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/orari/login.service';
import { Urls } from 'src/app/interfaces/urls';

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
