import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router ,CanActivate} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  { 
    constructor (private router : Router){}
      canActivate(
        router: ActivatedRouteSnapshot ,
        state: RouterStateSnapshot
      ){
        if(localStorage.getItem('currenUser')){
          return true;

        }
        this.router.navigate(['/login'],{queryParams:{returnUrl : state.url}});
        return false;
      }
    
   }
