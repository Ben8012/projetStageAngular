import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      {path : 'statistique', component : PageStatistiquesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
