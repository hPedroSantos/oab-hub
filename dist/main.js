"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const metricsRoutes_1 = __importDefault(require("./routes/metricsRoutes"));
const main = async () => {
    (0, dotenv_1.config)(); // carrega variáveis de ambiente
    const app = (0, express_1.default)();
    app.use(express_1.default.json()); // habilita parsing de JSON
    app.use(metricsRoutes_1.default); // importa suas rotas
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`escutando na porta ${PORT}`);
    });
};
main();
