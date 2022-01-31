import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ApiUtilisateurService } from 'src/app/services/api-utilisateur.service';

@Component({
  selector: 'app-details-clients-fournisseurs',
  templateUrl: './details-clients-fournisseurs.component.html',
  styleUrls: ['./details-clients-fournisseurs.component.scss']
})
export class DetailsClientsFournisseursComponent implements OnInit {

  public user = new Utilisateur("")

  public id : any

  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private apiUtilisateurService : ApiUtilisateurService
  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log(typeof(id))
    this.apiUtilisateurService.getUserById(id).subscribe(
      data =>{
        this.user = data;
        console.log(this.user)
      },error => {

      }
    )
  }

}
