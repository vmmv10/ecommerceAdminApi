import { Router } from "express";
import { isAuthenticated } from "../middleware.js";
import { getCategorias } from "../controllers/categoriaController.js";

const router = Router();

router.get('/categorias', isAuthenticated, getCategorias);

export default router