import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveauFournisseurComponent } from './pages/fournisseurs/nouveau-fournisseur/nouveau-fournisseur.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageCategorieComponent } from './pages/categories/page-categorie/page-categorie.component';
import { PageFournisseursComponent } from './pages/fournisseurs/page-fournisseurs/page-fournisseurs.component';
import { PageMovestockComponent } from './pages/movstock/page-movestock/page-movestock.component';
import { PageInscriptionComponent } from './pages/inscription/page-inscription.component';
import { PageLoginComponent } from './pages/login/page-login.component';
import { PageStatistiquesComponent } from './pages/statistiques/page-statistiques.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { NouvelUtilisateurComponent } from './pages/profil/modifier-profil/modifier-profil.component';
import { PageClientComponent } from './pages/clients/page-clients/page-clients.component';
import { ApplicationGuardService } from './services/guard/application-guard.service';
import { CommandePreparateurComponent } from './pages/preparateur/commande-preparateur/commande-preparateur.component';
import { ModifierArticleComponent } from './pages/articles/modifier-article/modifier-article.component';
import { ResolverModifierArticleService } from './services/resolvers/modifier-artcile.resolver';
import { NouvelleCmdFournisseurComponent } from './pages/fournisseurs/nouvelle-cmd-fournisseur/nouvelle-cmd-fournisseur.component';
import { ResolverNouvelleCommandeFournisseurService } from './services/resolvers/nouvelle-cmd-fournisseur.resolver';
import { PageDashboardComponent } from './composants/dashboard/page-dashboard.component';
import { CommandesFournisseursComponent } from './pages/fournisseurs/commandes-fournisseurs/commandes-fournisseurs.component';
import { PanierClientComponent } from './pages/clients/panier-client/panier-client.component';
import { NouveauPreparateurComponent } from './pages/preparateur/nouveau-preparateur/nouveau-preparateur.component';
import { PagePreparateurComponent } from './pages/preparateur/page-preparateur/page-preparateur.component';

const routes: Routes = [
  { path: 'login', component : PageLoginComponent },
  { path: 'inscrire', component : PageInscriptionComponent },
  { 
    path: '',
    component : PageDashboardComponent,
    canActivate : [ApplicationGuardService],
    children :[
      
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
          datas : ResolverModifierArticleService
        },
        component : ModifierArticleComponent,
        canActivate : [ApplicationGuardService]
      },
     
      {
        path:'preparateurs', 
        component : PagePreparateurComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'nouveaupreparateur',
        component : NouveauPreparateurComponent,
        canActivate : [ApplicationGuardService],
      },

      {
        path:'commandespreparateur', 
        component : CommandePreparateurComponent,
        canActivate : [ApplicationGuardService]
      },
     
      {
        path:'fournisseurs', 
        component : PageFournisseursComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'nouveaufournisseur', 
        component : NouveauFournisseurComponent,
        canActivate : [ApplicationGuardService],
      },
     
      {
        path:'commandesfournisseur', 
        component : CommandesFournisseursComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'nouvellecommandefournisseur/:id', 
        resolve :{
          datas : ResolverNouvelleCommandeFournisseurService
        },
        component : NouvelleCmdFournisseurComponent,
        canActivate : [ApplicationGuardService]
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
        path:'client', 
        component : PageClientComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path:'monpanier', 
        component : PanierClientComponent,
        canActivate : [ApplicationGuardService],
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
        path:'movestock', 
        component : PageMovestockComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path : 'statistiques',
        component : PageStatistiquesComponent,
        canActivate : [ApplicationGuardService]
      },
      
    ]
  },

  //{ path : '**' , redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
