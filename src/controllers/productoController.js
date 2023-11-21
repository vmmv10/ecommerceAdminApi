import { prisma } from "../libs/prisma.js"

export async function getProductos(req, res) {
  const data = await prisma.producto.findMany({})
  console.log(data)
  res.json(data)
}

export async function getProducto(req, res) {
  const data = await prisma.expedicion.findFirst({
    where: {
      id: Number(req.params.id)
    },
    // include: {
    //   imagen_tabla: {
    //     select: {
    //       imagen: {
    //         select: {
    //           id: true,
    //           url: true, // Puedes seleccionar los campos de imagen que necesites
    //           nombre: true,
    //           uso: true,
    //           public_id: true
    //         }
    //       }
    //     }
    //   },
    //   detalles: true,
    // }
  })
//   const exp = {
//     id: data.id,
//     userId: data.userId,
//     titulo: data.titulo,
//     descripcion: data.descripcion,
//     fecha: data.fecha,
//     precio: data.precio,
//     ubicacion1: data.ubicacion1,
//     ubicacion2: data.ubicacion2,
//     detalles: data.detalles,
//     imagenes: data.imagen_tabla.map((imagenTabla) => imagenTabla.imagen)
//   }
//   res.json(exp)
  res.json(data)
}

export async function postProducto(req, res) {
  const expedicion = req.body
  const producto = await prisma.producto.create(
    {
      data: {
        nombre: expedicion.nombre,
        sku: expedicion.sku,
        precio: expedicion.precio,
        descripcion: expedicion.descripcion,
      }
    }
  )
  res.json('Realizado con éxito', 200)
}