import { Router } from "express";
import { getAll } from "../controllers/usuario.controller.ts"
import { getNall } from "../controllers/usuario.controller.ts";

const router = Router();

// Definir la ruta correctamente
router.get("/all", getAll);
router.get("/Nall",getNall);

export default router;
