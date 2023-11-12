export const display = ['Show', 'Hidden']

export const productSearchableFields: string[] = [
  'searchTerm',
  'title',
  'description',
  'brand',
  'categoryId',
  'subCategoryId',
]

export const productRelationalFields: string[] = ['categoryId', 'subCategoryId']
export const productRelationalFieldsMapper: {
  [key: string]: string
} = {
  categoryId: 'category',
  subCategoryId: 'subCategory',
}
