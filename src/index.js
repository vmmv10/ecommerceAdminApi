import express from 'express';
import productosRoutes from './routes/productos.routes.js';
import variantesProductos from './routes/variantesProductos.routes.js';
import authRoutes from './routes/auth.routes.js';
import payment from './routes/payment.routes.js';
import marcas from './routes/marca.routes.js';
import categorias from './routes/categoria.routes.js';
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api", productosRoutes);
app.use("/api", variantesProductos);
app.use("/api", payment);
app.use("/api", authRoutes);
app.use("/api", marcas);
app.use("/api", categorias);

app.listen(5000)
console.log('server on port', 5000)