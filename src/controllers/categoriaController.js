import { prisma } from "../libs/prisma.js"

export async function getCategorias(req, res) {
    const data = await prisma.categoria.findMany({})
    res.json(data)
}