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
      id :'A1',
      icon:'fas fa-home',
      titre:'Tableau de bord',
      url:'',
      sousMenu: [
        {
          id :'A11',
          icon:'fas fa-chart-pie',
          titre:'Vue d\'ensemble',
          url:'',
        },
        {
          id :'A12',
          icon:'fas fa-chart-bar',
          titre:'Statistiques',
          url:'statistiques',
        },
      ],
    },
    {
      id :'B2',
      icon:'fas fa-boxes',
      titre:'Articles',
      url:'',
      sousMenu:[
        {
          id :'B21',
          icon:'fas fa-boxes',
          titre:'Articles',
          url:'articles',
        },
        {
          id :'B22',
          icon:'fab fa-stack-overflow',
          titre:'Mouvements du stock',
          url:'movestock',
        },
      ]
    },
    {
      id :'C3',
      icon:'fas fa-users',
      titre:'Préparateurs',
      url:'',
      sousMenu:[
        {
          id :'C31',
          icon:'fas fa-users',
          titre:'Préparateurs',
          url:'preparateurs',
        },
        {
          id :'C32',
          icon:'fas fa-shopping-basket',
          titre:'Commandes a prépararer',
          url:'commandespreparateur',
        },
      ]
    },
    {
      id :'C4',
      icon:'fas fa-users',
      titre:'Fournisseurs',
      url:'',
      sousMenu:[
        {
          id :'C41',
          icon:'fas fa-truck',
          titre:'Fournisseurs',
          url:'fournisseurs',
        },
        {
          id :'C42',
          icon:'fas fa-truck',
          titre:'Commandes fournisseurs',
          url:'commandesfournisseur',
        },
      ]
    },
    {
      id :'C5',
      icon:'fas fa-users',
      titre:'Clients',
      url:'',
      sousMenu:[
        {
          id :'C51',
          icon:'fas fa-users',
          titre:'Clients',
          url:'utilisateurs',
        },
        {
          id :'C52',
          icon:'fas fa-shopping-basket',
          titre:'Commandes clients',
          url:'',
        },
      ]
    },
    {
      id :'C6',
      icon:'fas fa-tools',
      titre:'Catégories',
      url:'',
      sousMenu:[
        {  
        id :'C60',
        icon:'fas fa-tools',
        titre:'Catégories',
        url:'categories',
        }
      
      ]
    },
    {
      id :'D7',
      icon:'fas fa-tools',
      titre:'Commandes',
      url:'',
      sousMenu:[
        {  
        id :'D70',
        icon:'fas fa-tools',
        titre:'Mes Commandes',
        url:'nouvellecommandeclient',
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
