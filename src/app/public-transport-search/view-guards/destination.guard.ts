import { DataStorageService } from './../services/data-storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationGuard implements CanActivate {
  constructor(private dataStorageService: DataStorageService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const startLocation = this.dataStorageService.getStartLocation();
      console.log('destination', startLocation);
      if (startLocation) {
        return true;
      }
      return this.router.parseUrl('/start-location');
  }

}
