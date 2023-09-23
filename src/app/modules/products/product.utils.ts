/* eslint-disable @typescript-eslint/no-explicit-any */

const createProductWithDetails = async (
  productId: string,
  payload: any,
  transactionProduct: any,
) => {
  const {
    colorConnection,
    sizeConnection,
    weightConnection,
    tagsConnection,
    freeDelivery,
    paidDelivery,
    imageUrl,
  } = payload

  if (colorConnection) {
    colorConnection.colorId.map(
      async (c: string) =>
        await transactionProduct.colorConnection.create({
          data: {
            productId: productId,
            colorId: c,
          },
        }),
    )
  }

  if (sizeConnection) {
    sizeConnection.sizeId.map(
      async (s: string) =>
        await transactionProduct.sizeConnection.create({
          data: {
            productId: productId,
            sizeId: s,
          },
        }),
    )
  }

  if (weightConnection) {
    await transactionProduct.weightConnection.create({
      data: {
        weightId: weightConnection.weightId,
        value: weightConnection.value,
        productId: productId,
      },
    })
  }

  if (tagsConnection) {
    tagsConnection.tagsId.map(
      async (t: string) =>
        await transactionProduct.tagsConnection.create({
          data: {
            productId: productId,
            tagsId: t,
          },
        }),
    )
  }

  if (freeDelivery) {
    await transactionProduct.freeDelivery.create({
      data: {
        productId: productId,
        location: freeDelivery.location,
        deliveryTime: freeDelivery.deliveryTime,
      },
    })
  }

  if (paidDelivery) {
    await transactionProduct.paidDelivery.create({
      data: {
        productId: productId,
        charge: paidDelivery.charge,
        deliveryTime: paidDelivery.deliveryTime,
      },
    })
  }

  if (imageUrl) {
    await transactionProduct.image.create({
      data: {
        imageUrl: imageUrl,
        productId: productId,
      },
    })
  }
}

export const ProductUtils = {
  createProductWithDetails,
}
