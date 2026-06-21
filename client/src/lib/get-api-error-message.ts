import { ApiError } from '@/lib/api';
import type { Translations } from '@/i18n/en';

const CATEGORY_NAME_EXISTS = 'A category with this name already exists';
const CATEGORY_CANNOT_DELETE = 'Cannot delete a category that has cakes assigned';

export function getApiErrorMessage(err: unknown, t: Translations): string {
  if (err instanceof ApiError) {
    if (err.message === CATEGORY_NAME_EXISTS) {
      return t.admin.categories.nameExists;
    }
    if (err.message === CATEGORY_CANNOT_DELETE) {
      return t.admin.categories.cannotDelete;
    }
    return err.message;
  }
  return t.common.error;
}
