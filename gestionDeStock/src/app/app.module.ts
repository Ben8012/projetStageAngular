import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/login/page-login.component';
import { PageInscriptionComponent } from './pages/inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMovestockComponent } from './pages/movstock/page-movestock/page-movestock.component';
import { PageClientComponent } from './pages/preparateur/page-client/page-preparateur.component';
import { PageFournisseursComponent } from './pages/fournisseurs/page-fournisseurs/page-fournisseurs.component';
import { NouveauClientFournisseurComponent } from './pages/fournisseurs/nouveau-preparateur-fournisseur/nouveau-client-fournisseur.component';
import { PageCmdClientFournisseurComponent } from './pages/commandes/page-cmd-client/page-cmd-client-fournisseur.component';
import { NouvelleCmdClientFournisseurComponent } from './pages/commandes/nouvelle-cmd-client/nouvelle-cmd-client-fournisseur.component';
import { PageCategorieComponent } from './pages/categories/page-categorie/page-categorie.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilisateursComponent } from './pages/clients/page-clients/page-utilisateurs.component';
import { NouvelUtilisateurComponent } from './pages/profil/modifier-profil/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorService } from './services/interceptor/http-interceptor.service';
import { UserSessionService } from './services/user_session/user-session.service';
import { CommandePreparateurComponent } from './pages/preparateur/commande-preparateur/commande-preparateur.component';
import { FooterComponent } from './composants/footer/footer.component';
import { ModifierArticleComponent } from './pages/articles/modifier-article/modifier-article.component';
import { NouvelleCmdFournisseurComponent } from './pages/commandes/nouvelle-cmd-fournisseur/nouvelle-cmd-fournisseur/nouvelle-cmd-fournisseur.component';

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
    PaginationComponent,
    BouttonActionComponent,
    NouvelArticleComponent,
    PageMovestockComponent,
    PageClientComponent,
    PageFournisseursComponent,
    NouveauClientFournisseurComponent,
    PageCmdClientFournisseurComponent,
    NouvelleCmdClientFournisseurComponent,
    PageCategorieComponent,
    NouvelleCategorieComponent,
    PageUtilisateursComponent,
    NouvelUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent,
    CommandePreparateurComponent,
    FooterComponent,
    ModifierArticleComponent,
    NouvelleCmdFournisseurComponent,
 
   
    
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
