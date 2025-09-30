import { Router } from "express";
import { AccuracyRepository } from "../repositories/get-acurracy/AcurracyRepository";
import { AcurracyService } from "../services/acurracy-service/AcurracyService";
import { Acurracy } from "../controllers/get-accuracy/AccuracyController";

import { GetGroupQuestsRepository } from "../repositories/get-group-quests/GetGroupQuestsRepository";
import { GroupQuestsService } from "../services/group-quests-service/GroupQuestsService";
import { GroupQuestsController } from "../controllers/get-group-quests/GroupQuestsController";

const router = Router();

router.get("/api/v1/acurracy/:id", async (req, res) => {
    try {
        const repo = new AccuracyRepository();
        const service = new AcurracyService(repo);
        const controller = new Acurracy(service);

        const id = req.params.id;
        const resultado = await controller.handle(id);

        res.status(200).json(resultado);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao buscar acurácia" });
    }
});

router.post("/api/v1/questoes-agrupadas", async (req, res) => {
    try {
        const { disciplinas } = req.body; // front envia um array ["Direito Penal", "Direito Constitucional"]

        const repo = new GetGroupQuestsRepository();
        const service = new GroupQuestsService(repo);
        const controller = new GroupQuestsController(service);

        const resultado = await controller.handle(disciplinas);

        res.status(200).json(resultado);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao buscar questões agrupadas" });
    }
});

export default router;
