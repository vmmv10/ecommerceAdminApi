import { prisma } from "../libs/prisma.js"

export async function getMarcas(req, res) {
    const data = await prisma.marca.findMany({})
    res.json(data)
}

export async function postMarca(req, res) {
    const marca = req.body.data
    const usuario = await prisma.marca.create(
        {
            data: {
                nombre: marca.nombre,
                descripcion: marca.descripcion
            }
        }
    )
    res.json('Realizado con éxito', 200)
}