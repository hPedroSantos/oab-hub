import { IGetGroupQuestsRepository } from "../../repositories/IMetricsRepository";

export class GroupQuestsService {
    constructor(private readonly groupQuestsRepository: IGetGroupQuestsRepository) {}

    async getGroupQuests(disciplinas: string[]) {
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
