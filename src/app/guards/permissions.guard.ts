import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const permissionsGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.getAuthToken().pipe(
    map(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      } else {
        return false;
      }
    })
  );
};
