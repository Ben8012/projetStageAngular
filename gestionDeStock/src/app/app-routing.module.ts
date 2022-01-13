import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailArticleMoveStockComponent } from './composants/detail-article-move-stock/detail-article-move-stock.component';
import { NouveauClientFournisseurComponent } from './composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { NouvelleCmdClientFournisseurComponent } from './composants/nouvelle-cmd-client-fournisseur/nouvelle-cmd-client-fournisseur.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageCategorieComponent } from './pages/categories/page-categorie/page-categorie.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseursComponent } from './pages/fournisseurs/page-fournisseurs/page-fournisseurs.component';
import { PageMovestockComponent } from './pages/movstock/page-movestock/page-movestock.component';
import { PageCmdClientFournisseurComponent } from './pages/page-cmd-client-fournisseur/page-cmd-client-fournisseur.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { NouvelUtilisateurComponent } from './pages/utilisateurs/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageUtilisateursComponent } from './pages/utilisateurs/page-utilisateurs/page-utilisateurs.component';

const routes: Routes = [
  { path: 'login', component : PageLoginComponent },
  { path: 'inscrire', component : PageInscriptionComponent },
  { 
    path: '', 
    component : PageDashboardComponent,
    children :[
      {
        path : 'statistiques',
        component : PageStatistiquesComponent 
      },
      {
        path:'articles',
        component : PageArticleComponent
      },
      {
        path:'nouvelarticle',
        component : NouvelArticleComponent
      },
      {
        path:'movestock', 
        component : PageMovestockComponent
      },
      {
        path:'clients', 
        component : PageClientComponent
      },
      {
        path:'nouveauclient', 
        component : NouveauClientFournisseurComponent,
        data:{
          origin :'client'
        }
      },
      {
        path:'commandesclient', 
        component : PageCmdClientFournisseurComponent,
        data:{
          origin :'client'
        }
      },
      {
        path:'nouvellecommandeclient', 
        component : NouvelleCmdClientFournisseurComponent,
        data:{
          origin :'client'
        }
      },
      {
        path:'fournisseurs', 
        component : PageFournisseursComponent
      },
      {
        path:'nouveaufournisseur',
        component : NouveauClientFournisseurComponent,
        data:{
          origin :'fournisseur'
        }
      },
      {
        path:'commandesfournisseur', 
        component : PageCmdClientFournisseurComponent,
        data:{
          origin :'fournisseur'
        }
      },
      {
        path:'nouvellecommandefournisseur', 
        component : NouvelleCmdClientFournisseurComponent,
        data:{
          origin :'fournisseur'
        }
      },
      {
        path:'categories', 
        component : PageCategorieComponent
      },
      {
        path:'nouvelcategorie', 
        component : NouvelleCategorieComponent
      },
      {
        path:'utilisateurs', 
        component : PageUtilisateursComponent
      },
      {
        path:'nouvelutilisateur', 
        component : NouvelUtilisateurComponent
      },
      {
        path:'profil', 
        component : PageProfilComponent
      },
      {
        path:'changermotdepasse',
        component : ChangerMotDePasseComponent
      },
      {
        path:'modifierprofil', 
        component : NouvelUtilisateurComponent
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
