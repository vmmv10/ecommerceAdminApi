import { Router } from "express";
import { deleteMarca, getMarcas, postMarca } from "../controllers/marcaController.js";
import { isAuthenticated } from "../middleware.js";

const router = Router();

router.get('/marcas', isAuthenticated, getMarcas);
router.post('/marca', isAuthenticated, postMarca);
router.delete('/marca/:id', isAuthenticated, deleteMarca);

export default router