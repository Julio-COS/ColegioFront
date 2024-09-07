import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const permissionsGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.getAuthToken();
};