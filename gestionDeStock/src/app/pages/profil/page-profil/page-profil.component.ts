import { Component, OnInit } from '@angular/core';
import { AuthUser } from 'src/app/models/auth/auth-user';
import { UserSessionService } from 'src/app/services/user_session/user-session.service';
import { DateUtils } from 'src/app/utils/date.utils';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss']
})
export class PageProfilComponent implements OnInit {

  public user= new AuthUser('')
  public dateNaissance =''

  constructor(
    private userSessionService : UserSessionService
  ) { }

  ngOnInit(): void {
    this.userSessionService.user$.subscribe((user : any) => {
      this.user  = user;
      this.dateNaissance  = DateUtils.format(new Date(this.user.dateNaissance));
      
      //console.log(this.user)
    })
  }

}
