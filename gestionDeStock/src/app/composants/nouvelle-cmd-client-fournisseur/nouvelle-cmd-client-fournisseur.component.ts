import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-client-fournisseur',
  templateUrl: './nouvelle-cmd-client-fournisseur.component.html',
  styleUrls: ['./nouvelle-cmd-client-fournisseur.component.scss']
})
export class NouvelleCmdClientFournisseurComponent implements OnInit {

  origin='';

  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>{
      this.origin = data.origin;
    })
  }

}
