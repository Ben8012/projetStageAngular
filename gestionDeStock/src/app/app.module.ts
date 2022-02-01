import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMovestockComponent } from './pages/movstock/page-movestock/page-movestock.component';
import { DetailArticleMoveStockComponent } from './composants/detail-article-move-stock/detail-article-move-stock.component';
import { DetailMoveStockComponent } from './composants/detail-move-stock/detail-move-stock.component';
import { DetailsClientsFournisseursComponent } from './composants/details-clients-fournisseurs/details-clients-fournisseurs.component';
import { PageClientComponent } from './pages/page-preparateur/page-client/page-preparateur.component';
import { PageFournisseursComponent } from './pages/fournisseurs/page-fournisseurs/page-fournisseurs.component';
import { NouveauClientFournisseurComponent } from './composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { DetailsCmdClientFournisseurComponent } from './composants/details-cmd-client-fournisseur/details-cmd-client-fournisseur.component';
import { DetailCommandeComponent } from './composants/detail-commande/detail-commande.component';
import { PageCmdClientFournisseurComponent } from './pages/page-cmd-client-fournisseur/page-cmd-client-fournisseur.component';
import { NouvelleCmdClientFournisseurComponent } from './composants/nouvelle-cmd-client-fournisseur/nouvelle-cmd-client-fournisseur.component';
import { PageCategorieComponent } from './pages/categories/page-categorie/page-categorie.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilisateursComponent } from './pages/utilisateurs/page-utilisateurs/page-utilisateurs.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateurs/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorService } from './services/interceptor/http-interceptor.service';
import { UserSessionService } from './services/user_session/user-session.service';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelArticleComponent,
    PageMovestockComponent,
    DetailArticleMoveStockComponent,
    DetailMoveStockComponent,
    DetailsClientsFournisseursComponent,
    PageClientComponent,
    PageFournisseursComponent,
    NouveauClientFournisseurComponent,
    DetailsCmdClientFournisseurComponent,
    DetailCommandeComponent,
    PageCmdClientFournisseurComponent,
    NouvelleCmdClientFournisseurComponent,
    PageCategorieComponent,
    NouvelleCategorieComponent,
    PageUtilisateursComponent,
    DetailUtilisateurComponent,
    NouvelUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent,
 
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpInterceptorService,
      multi : true,
    },
    UserSessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
