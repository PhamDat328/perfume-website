import { CookieStoreObj } from '@/types/common';

export const convertObjectToCookies = (obj: CookieStoreObj[]) =>
  obj.map(item => `${item.name}=${item.value}`).join('; ');
