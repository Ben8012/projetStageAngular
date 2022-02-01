import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu} from './menu'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties : Array<Menu> =[
    {
      id :'1',
      icon:'fas fa-home',
      titre:'Tableau de bord',
      url:'',
      sousMenu: [
        {
          id :'11',
          icon:'fas fa-chart-pie',
          titre:'Vue d\'ensemble',
          url:'',
        },
        {
          id :'12',
          icon:'fas fa-chart-bar',
          titre:'Statistiques',
          url:'statistiques',
        },
      ],
    },
    {
      id :'2',
      icon:'fas fa-boxes',
      titre:'Articles',
      url:'',
      sousMenu:[
        {
          id :'21',
          icon:'fas fa-boxes',
          titre:'Articles',
          url:'articles',
        },
        {
          id :'22',
          icon:'fab fa-stack-overflow',
          titre:'Mouvements du stock',
          url:'movestock',
        },
      ]
    },
    {
      id :'3',
      icon:'fas fa-users',
      titre:'Préparateurs',
      url:'',
      sousMenu:[
        {
          id :'31',
          icon:'fas fa-users',
          titre:'Préparateurs',
          url:'preparateurs',
        },
        {
          id :'32',
          icon:'fas fa-shopping-basket',
          titre:'Commandes préparateurs',
          url:'commandespreparateur',
        },
      ]
    },
    {
      id :'4',
      icon:'fas fa-users',
      titre:'Fournisseurs',
      url:'',
      sousMenu:[
        {
          id :'41',
          icon:'fas fa-truck',
          titre:'Fournisseurs',
          url:'fournisseurs',
        },
        {
          id :'42',
          icon:'fas fa-truck',
          titre:'Commandes fournisseurs',
          url:'commandesfournisseur',
        },
      ]
    },
    {
      id :'5',
      icon:'fas fa-users',
      titre:'Clients',
      url:'',
      sousMenu:[
        {
          id :'51',
          icon:'fas fa-users',
          titre:'Clients',
          url:'utilisateurs',
        },
        {
          id :'52',
          icon:'fas fa-shopping-basket',
          titre:'Commandes clients',
          url:'',
        },
      ]
    },
    {
      id :'6',
      icon:'fas fa-tools',
      titre:'Catégories',
      url:'',
      sousMenu:[
        {  
        id :'60',
        icon:'fas fa-tools',
        titre:'Catégories',
        url:'categories',
        }
      
      ]
    }
   
  ]; 

  private lastSelectedMenu: Menu | undefined;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  navigate(menu : Menu): void{
    if(this.lastSelectedMenu){
      this.lastSelectedMenu.active =false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }
}
