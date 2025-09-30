import { GroupQuestsService } from "../../services/group-quests-service/GroupQuestsService";
import { IController } from "../interfaces";

export class GroupQuestsController implements IController {
    constructor(private readonly groupQuestsService: GroupQuestsService) {}

    async handle(disciplinas: string[]): Promise<any> {
        try {
            if (!disciplinas || disciplinas.length === 0) {
                throw new Error("É necessário informar ao menos uma disciplina.");
            }

            const resultado = await this.groupQuestsService.getGroupQuests(disciplinas);

            return resultado;
        } catch (error) {
            console.error("Erro no GroupQuestsController:", error);
            throw error;
        }
    }
}
