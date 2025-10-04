"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupQuestsService = void 0;
class GroupQuestsService {
    constructor(groupQuestsRepository) {
        this.groupQuestsRepository = groupQuestsRepository;
    }
    async getGroupQuests(disciplinas) {
        if (!disciplinas || disciplinas.length === 0) {
            throw new Error("Você precisa selecionar ao menos uma disciplina.");
        }
        // chama o repository
        const questoes = await this.groupQuestsRepository.getGroupQuests(disciplinas);
        // aqui você pode aplicar regras de negócio ou formatar o retorno
        return {
            disciplinasSelecionadas: disciplinas,
            totalQuestoes: questoes.length,
            questoes: questoes
        };
    }
}
exports.GroupQuestsService = GroupQuestsService;
