import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiArticleService } from '../api/api-article.service';


@Injectable({
  providedIn: 'root'
})
export class ResolverInfosFormationService implements Resolve<any>{

  constructor(
      public apiArticleService :  ApiArticleService
      ) { }


  resolve(route : ActivatedRouteSnapshot)
  {
    return this.apiArticleService.getArticleByID(route.params.id).pipe()
  }
}