-- Georgian (and other non-Latin) names previously slugified to '' and collided on the unique slug index.
UPDATE "Category"
SET slug = 'cat-' || id
WHERE slug = '';
