import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let islogged = localStorage.getItem('isloggedin');
  if (islogged == 'false') {
    alert('not authenticated')
    return false
  } else {
    return true;
  }
};
