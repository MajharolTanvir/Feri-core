import { Color } from "@prisma/client"
import prisma from "../../../shared/prisma"


const addColor = async (colorData: Color) => {
    const color = await prisma.color.create({
        data: colorData
    })
    return color
}

const getColors = async () => {
    const colors = await prisma.color.findMany({})
    return colors
}

const editColor = async (colorData: Partial<Color>, id: string) => {
    const color = await prisma.color.update(
        { where: { id }, data: colorData },

    )
    return color
}

const deleteColor = async (id: string) => {
    const color = await prisma.color.delete({ where: { id } })
    return color
}


export const ColorService = {
    addColor,
    getColors,
    editColor,
    deleteColor
}