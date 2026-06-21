import { useState } from 'react';
import { Button, Input, Spinner } from '@/components/ui';
import {
  useAdminCategories,
  useCreateCategory,
  useUpdateCategory,
  useDeleteCategory,
} from '@/features/admin';
import { useT } from '@/i18n';
import { getApiErrorMessage } from '@/lib/get-api-error-message';
import { toast } from '@/lib/toast';
import type { CategoryWithCount } from '@/types';

export function AdminCategoriesPage() {
  const t = useT();
  const { data: categories, isLoading } = useAdminCategories();
  const createCategory = useCreateCategory();
  const updateCategory = useUpdateCategory();
  const deleteCategory = useDeleteCategory();

  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!newName.trim()) return;
    try {
      await createCategory.mutateAsync(newName.trim());
      setNewName('');
      toast.success(t.admin.categories.created);
    } catch (err) {
      toast.error(getApiErrorMessage(err, t));
    }
  }

  function startEdit(cat: CategoryWithCount) {
    setEditingId(cat.id);
    setEditName(cat.name);
  }

  async function saveEdit(id: string) {
    if (!editName.trim()) return;
    try {
      await updateCategory.mutateAsync({ id, name: editName.trim() });
      setEditingId(null);
      toast.success(t.admin.categories.updated);
    } catch (err) {
      toast.error(getApiErrorMessage(err, t));
    }
  }

  async function handleDelete(id: string) {
    if (!confirm(t.admin.categories.confirmDelete)) return;
    try {
      await deleteCategory.mutateAsync(id);
      toast.success(t.admin.categories.deleted);
    } catch (err) {
      toast.error(getApiErrorMessage(err, t));
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center py-24">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-display text-3xl text-espresso mb-2">{t.admin.categories.title}</h1>
      <p className="font-sans text-sm text-espresso/50 mb-8">{t.admin.categories.subtitle}</p>

      <form onSubmit={handleCreate} className="flex gap-3 mb-8">
        <div className="flex-1">
          <Input
            label={t.admin.categories.newCategoryName}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="e.g. Celebration"
          />
        </div>
        <Button type="submit" loading={createCategory.isPending} className="self-end">
          {t.common.add}
        </Button>
      </form>

      <div className="bg-cream border border-espresso/10">
        <table className="w-full text-sm font-sans">
          <thead>
            <tr className="border-b border-espresso/10 text-left text-espresso/50">
              <th className="p-4 font-medium">{t.admin.categories.name}</th>
              <th className="p-4 font-medium">{t.admin.categories.slug}</th>
              <th className="p-4 font-medium">{t.admin.categories.cakes}</th>
              <th className="p-4 font-medium">{t.admin.categories.actions}</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((cat) => (
              <tr key={cat.id} className="border-b border-espresso/5">
                <td className="p-4">
                  {editingId === cat.id ? (
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="bg-warm border border-espresso/20 px-3 py-1.5 text-sm w-full"
                    />
                  ) : (
                    <span className="text-espresso">{cat.name}</span>
                  )}
                </td>
                <td className="p-4 text-espresso/50">{cat.slug}</td>
                <td className="p-4 text-espresso/70">{cat._count?.cakes ?? 0}</td>
                <td className="p-4">
                  <div className="flex gap-3">
                    {editingId === cat.id ? (
                      <>
                        <button
                          type="button"
                          onClick={() => saveEdit(cat.id)}
                          className="text-rose hover:text-rose-dark"
                        >
                          {t.common.save}
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingId(null)}
                          className="text-espresso/40"
                        >
                          {t.common.cancel}
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => startEdit(cat)}
                          className="text-rose hover:text-rose-dark"
                        >
                          {t.common.edit}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(cat.id)}
                          className="text-espresso/40 hover:text-red-500"
                        >
                          {t.common.delete}
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
