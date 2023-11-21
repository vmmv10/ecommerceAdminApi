import { Router } from "express";
import { isAuthenticated } from "../middleware.js";
import { postVarianteProducto } from "../controllers/variantesProductoController.js";

const router = Router();

router.post('/productos/variantes', isAuthenticated, postVarianteProducto);

export default router;