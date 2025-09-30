import prisma from "../../database/mariadb";
import { IGetGroupQuestsRepository } from "../IMetricsRepository";

export class GetGroupQuestsRepository implements IGetGroupQuestsRepository {
    async getGroupQuests(disciplinas: string[]): Promise<any> {
        try {
            if (!disciplinas || disciplinas.length === 0) {
                throw new Error("É necessário selecionar ao menos uma disciplina.");
            }

            // Busca todas as questões das disciplinas selecionadas
            const questoes = await prisma.questoes.findMany({
                where: {
                    disciplina: {
                        in: disciplinas, // array vindo do front
                    }
                }
            });

            return questoes;
        } catch (error) {
            console.error("Erro ao buscar questões por disciplina:", error);
            throw error;
        }
    }
}
