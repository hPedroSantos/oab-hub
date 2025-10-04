"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AcurracyRepository_1 = require("../repositories/get-acurracy/AcurracyRepository");
const AcurracyService_1 = require("../services/acurracy-service/AcurracyService");
const AccuracyController_1 = require("../controllers/get-accuracy/AccuracyController");
const GetGroupQuestsRepository_1 = require("../repositories/get-group-quests/GetGroupQuestsRepository");
const GroupQuestsService_1 = require("../services/group-quests-service/GroupQuestsService");
const GroupQuestsController_1 = require("../controllers/get-group-quests/GroupQuestsController");
const router = (0, express_1.Router)();
router.get("/api/v1/acurracy/:id", async (req, res) => {
    try {
        const repo = new AcurracyRepository_1.AccuracyRepository();
        const service = new AcurracyService_1.AcurracyService(repo);
        const controller = new AccuracyController_1.Acurracy(service);
        const id = req.params.id;
        const resultado = await controller.handle(id);
        res.status(200).json(resultado);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao buscar acurácia" });
    }
});
router.post("/api/v1/questoes-agrupadas", async (req, res) => {
    try {
        const { disciplinas } = req.body; // front envia um array ["Direito Penal", "Direito Constitucional"]
        const repo = new GetGroupQuestsRepository_1.GetGroupQuestsRepository();
        const service = new GroupQuestsService_1.GroupQuestsService(repo);
        const controller = new GroupQuestsController_1.GroupQuestsController(service);
        const resultado = await controller.handle(disciplinas);
        res.status(200).json(resultado);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao buscar questões agrupadas" });
    }
});
exports.default = router;
