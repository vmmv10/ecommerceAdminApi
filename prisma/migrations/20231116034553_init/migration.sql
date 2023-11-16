-- CreateTable
CREATE TABLE "Usuario" (
    "UsuarioID" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Correo" TEXT NOT NULL,
    "Contrasena" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("UsuarioID")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Precio" DOUBLE PRECISION NOT NULL,
    "Stock" INTEGER NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VarianteProducto" (
    "id" SERIAL NOT NULL,
    "ProductoID" INTEGER NOT NULL,
    "Color" TEXT NOT NULL,
    "Talla" TEXT NOT NULL,
    "Precio" DOUBLE PRECISION NOT NULL,
    "Stock" INTEGER NOT NULL,

    CONSTRAINT "VarianteProducto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "varianteProductoVarianteID" INTEGER,
    "varianteProductoId" INTEGER,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriaProducto" (
    "id" SERIAL NOT NULL,
    "tabla" TEXT NOT NULL,
    "categoria_id" INTEGER NOT NULL,
    "producto_id" INTEGER NOT NULL,

    CONSTRAINT "CategoriaProducto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "UsuarioID" INTEGER NOT NULL,
    "FechaPedido" TIMESTAMP(3) NOT NULL,
    "Estado" TEXT NOT NULL,
    "usuarioUsuarioID" INTEGER NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetallePedido" (
    "DetalleID" SERIAL NOT NULL,
    "PedidoID" INTEGER NOT NULL,
    "VarianteID" INTEGER NOT NULL,
    "Cantidad" INTEGER NOT NULL,
    "PrecioUnitario" DOUBLE PRECISION NOT NULL,
    "pedidoPedidoID" INTEGER NOT NULL,
    "varianteProductoVarianteID" INTEGER NOT NULL,

    CONSTRAINT "DetallePedido_pkey" PRIMARY KEY ("DetalleID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_Correo_key" ON "Usuario"("Correo");

-- AddForeignKey
ALTER TABLE "VarianteProducto" ADD CONSTRAINT "VarianteProducto_ProductoID_fkey" FOREIGN KEY ("ProductoID") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categoria" ADD CONSTRAINT "Categoria_varianteProductoVarianteID_fkey" FOREIGN KEY ("varianteProductoVarianteID") REFERENCES "VarianteProducto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriaProducto" ADD CONSTRAINT "CategoriaProducto_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "Producto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriaProducto" ADD CONSTRAINT "CategoriaProducto_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "Categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_usuarioUsuarioID_fkey" FOREIGN KEY ("usuarioUsuarioID") REFERENCES "Usuario"("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_PedidoID_fkey" FOREIGN KEY ("PedidoID") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_varianteProductoVarianteID_fkey" FOREIGN KEY ("varianteProductoVarianteID") REFERENCES "VarianteProducto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
