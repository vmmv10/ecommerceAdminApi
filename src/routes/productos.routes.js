import { Router } from "express";
import { isAuthenticated } from "../middleware.js";
import { getProducto, getProductos, postProducto } from "../controllers/ProductoController.js";

const router = Router();

router.get('/productos', isAuthenticated, getProductos);
router.get('/productos/:id', isAuthenticated, getProducto);
router.post('/productos/', isAuthenticated, postProducto);

export default router;