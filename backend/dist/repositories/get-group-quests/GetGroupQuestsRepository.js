"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGroupQuestsRepository = void 0;
const mariadb_1 = __importDefault(require("../../database/mariadb"));
class GetGroupQuestsRepository {
    async getGroupQuests(disciplinas) {
        try {
            if (!disciplinas || disciplinas.length === 0) {
                throw new Error("É necessário selecionar ao menos uma disciplina.");
            }
            // Busca todas as questões das disciplinas selecionadas
            const questoes = await mariadb_1.default.questoes.findMany({
                where: {
                    disciplina: {
                        in: disciplinas, // array vindo do front
                    }
                }
            });
            return questoes;
        }
        catch (error) {
            console.error("Erro ao buscar questões por disciplina:", error);
            throw error;
        }
    }
}
exports.GetGroupQuestsRepository = GetGroupQuestsRepository;
