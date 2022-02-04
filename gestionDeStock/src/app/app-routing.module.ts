import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveauClientFournisseurComponent } from './pages/fournisseurs/nouveau-preparateur-fournisseur/nouveau-client-fournisseur.component';
import { NouvelleCmdClientFournisseurComponent } from './pages/commandes/nouvelle-cmd-client/nouvelle-cmd-client-fournisseur.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageCategorieComponent } from './pages/categories/page-categorie/page-categorie.component';
import { PageClientComponent } from './pages/preparateur/page-client/page-preparateur.component';
import { PageFournisseursComponent } from './pages/fournisseurs/page-fournisseurs/page-fournisseurs.component';
import { PageMovestockComponent } from './pages/movstock/page-movestock/page-movestock.component';
import { PageCmdClientFournisseurComponent } from './pages/commandes/page-cmd-client/page-cmd-client-fournisseur.component';
import { PageDashboardComponent } from './pages/dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/inscription/page-inscription.component';
import { PageLoginComponent } from './pages/login/page-login.component';
import { PageStatistiquesComponent } from './pages/statistiques/page-statistiques.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { NouvelUtilisateurComponent } from './pages/profil/modifier-profil/nouvel-utilisateur.component';
import { PageUtilisateursComponent } from './pages/clients/page-clients/page-utilisateurs.component';
import { ApplicationGuardService } from './services/guard/application-guard.service';
import { CommandePreparateurComponent } from './pages/preparateur/commande-preparateur/commande-preparateur.component';
import { ModifierArticleComponent } from './pages/articles/modifier-article/modifier-article.component';
import { ResolverInfosFormationService } from './services/resolvers/modifier-artcile.resolver';

const routes: Routes = [

  { path: 'login', component : PageLoginComponent },
  { path: 'inscrire', component : PageInscriptionComponent },
  { 
    path: '', 
    component : PageDashboardComponent,
    children :[
      {
        path : 'statistiques',
        component : PageStatistiquesComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'articles',
        component : PageArticleComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'nouvelarticle',
        component : NouvelArticleComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'modifierarticle/:id',
        resolve :{
          datas : ResolverInfosFormationService
        },
        component : ModifierArticleComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'movestock', 
        component : PageMovestockComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'preparateurs', 
        component : PageClientComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'nouveauclient/:id', 
        component : NouveauClientFournisseurComponent,
        canActivate : [ApplicationGuardService],
        data:{
          origin :'client'
        }
      },
      {
        path:'commandesclient', 
        component : PageCmdClientFournisseurComponent,
        canActivate : [ApplicationGuardService],
        data:{
          origin :'client'
        }
      },
      {
        path:'nouvellecommandeclient', 
        component : NouvelleCmdClientFournisseurComponent,
        canActivate : [ApplicationGuardService],
        data:{
          origin :'client'
        }
      },
      {
        path:'fournisseurs', 
        component : PageFournisseursComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'nouveaufournisseur/:id',
        component : NouveauClientFournisseurComponent,
        canActivate : [ApplicationGuardService],
        data:{
          origin :'fournisseur'
        }
      },
      {
        path:'commandesfournisseur', 
        component : PageCmdClientFournisseurComponent,
        canActivate : [ApplicationGuardService],
        data:{
          origin :'fournisseur'
        }
      },
      {
        path:'nouvellecommandefournisseur', 
        component : NouvelleCmdClientFournisseurComponent,
        canActivate : [ApplicationGuardService],
        data:{
          origin :'fournisseur'
        }
      },
      {
        path:'categories', 
        component : PageCategorieComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'nouvelcategorie', 
        component : NouvelleCategorieComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'utilisateurs', 
        component : PageUtilisateursComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'nouvelutilisateur', 
        component : NouvelUtilisateurComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'profil', 
        component : PageProfilComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'changermotdepasse',
        component : ChangerMotDePasseComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'modifierprofil', 
        component : NouvelUtilisateurComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'commandespreparateur', 
        component : CommandePreparateurComponent,
        canActivate : [ApplicationGuardService]
      },
    ]
  },

  { path : '**' , redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
