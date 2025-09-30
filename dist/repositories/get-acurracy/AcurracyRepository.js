"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccuracyRepository = void 0;
const mariadb_1 = __importDefault(require("../../database/mariadb"));
class AccuracyRepository {
    async getAcurracy(id) {
        try {
            if (!id) {
                throw new Error("Deve ter um ID");
            }
            const simulados = await mariadb_1.default.simulados_feitos.findMany({
                where: { id_usuario: id },
                include: {
                    respostas_simulado: true,
                    resultados_por_disciplina: true,
                },
            });
            return simulados;
        }
        catch {
            console.log("erro");
        }
    }
}
exports.AccuracyRepository = AccuracyRepository;
