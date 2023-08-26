import { Weight } from "@prisma/client"
import prisma from "../../../shared/prisma"

//* Weight services
const addWeight = async (weightData: Weight) => {
  const weight = await prisma.weight.create({ data: weightData })
  return weight
}

const getWeights = async () => {
  const sizes = await prisma.weight.findMany({})
  return sizes
}

const editWeight = async (weightData: Partial<Weight>, id: string) => {
  const weight = await prisma.weight.update(
    { where: { id }, data: weightData },
  )
  return weight
}

const deleteWeight = async (id: string) => {
  const weight = await prisma.weight.delete({ where: { id } })
  return weight
}

export const WeightService = {
  addWeight,
  getWeights,
  editWeight,
  deleteWeight,
}
