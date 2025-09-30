"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupQuestsController = void 0;
class GroupQuestsController {
    constructor(groupQuestsService) {
        this.groupQuestsService = groupQuestsService;
    }
    async handle(disciplinas) {
        try {
            if (!disciplinas || disciplinas.length === 0) {
                throw new Error("É necessário informar ao menos uma disciplina.");
            }
            const resultado = await this.groupQuestsService.getGroupQuests(disciplinas);
            return resultado;
        }
        catch (error) {
            console.error("Erro no GroupQuestsController:", error);
            throw error;
        }
    }
}
exports.GroupQuestsController = GroupQuestsController;
