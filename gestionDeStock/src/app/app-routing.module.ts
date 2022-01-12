import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailArticleMoveStockComponent } from './composants/detail-article-move-stock/detail-article-move-stock.component';
import { NouveauClientFournisseurComponent } from './composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseursComponent } from './pages/fournisseurs/page-fournisseurs/page-fournisseurs.component';
import { PageMovestockComponent } from './pages/movstock/page-movestock/page-movestock.component';
import { PageCmdClientFournisseurComponent } from './pages/page-cmd-client-fournisseur/page-cmd-client-fournisseur.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';

const routes: Routes = [
  { path: 'login', component : PageLoginComponent },
  { path: 'inscrire', component : PageInscriptionComponent },
  { 
    path: '', 
    component : PageDashboardComponent,
    children :[
      {path : 'statistiques', component : PageStatistiquesComponent },
      {path:'articles', component : PageArticleComponent},
      {path:'nouvelarticle', component : NouvelArticleComponent},
      {path:'movestock', component : PageMovestockComponent},
      {path:'clients', component : PageClientComponent},
      {path:'nouveauclient', component : NouveauClientFournisseurComponent},
      {path:'commandesclient', component : PageCmdClientFournisseurComponent},
      {path:'fournisseurs', component : PageFournisseursComponent},
      {path:'nouveaufournisseur', component : NouveauClientFournisseurComponent},
      {path:'commandesfournisseur', component : PageCmdClientFournisseurComponent},
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
