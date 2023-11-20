import {
  CanActivateFn,
  Router,
} from '@angular/router';
import {inject} from "@angular/core";
import {GunService} from "../services/gun.service";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const gunService = inject(GunService);

  if (!gunService.isLoggedIn()) {
    router.navigate(['auth']);
    return false;
  }

  return true;
};
