import { prisma } from "../libs/prisma.js"

export async function postVarianteProducto(req, res) {
  const data = req.body
  const producto = await prisma.producto.create(
    {
      data: {
        nombre: data.nombre,
        sku: data.sku,
        precio: data.precio,
        descripcion: data.descripcion,
        talla: data.talla,
        color: data.color,
        stock: data.stock,
        producto_id: data.producto_id
      }
    }
  )
  res.json('Realizado con éxito', 200)
}