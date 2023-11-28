import { Router } from "express";
import { getMarcas, postMarca } from "../controllers/marcaController.js";
import { isAuthenticated } from "../middleware.js";

const router = Router();

router.get('/marcas', isAuthenticated, getMarcas);
router.post('/marca', isAuthenticated, postMarca);

export default router