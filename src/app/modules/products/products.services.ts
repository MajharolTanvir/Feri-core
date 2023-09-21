import { ProductsType } from './products.interface'
import { Products } from './products.model'

const createProduct = async (productData: ProductsType) => {
  const product = await Products.create(productData)
  return product
}

export const SubCategoryService = {
  createProduct,
}
