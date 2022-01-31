import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/auth/auth-user';
import { UserSessionService } from 'src/app/services/user_session/user-session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user : AuthUser = new AuthUser("");

  constructor(
    private userSessionService : UserSessionService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.userSessionService.user$.subscribe((user : any) => {
      this.user  = user;
      //console.log(this.user)
    })
  }


  logout(){
    this.userSessionService.clearSession()
    this.router.navigate(['login'])
  }
}
