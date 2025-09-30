import { AcurracyService } from "../../services/acurracy-service/AcurracyService";
import { IController } from "../interfaces";

export class Acurracy implements IController {
    constructor(private readonly acurracy: AcurracyService) {}

    // Recebe o userId como parâmetro
    async handle(userId: string): Promise<any> {
        try {
            const acurracy = await this.acurracy.getAcurracy(userId);
            return acurracy;
        } catch (err) {
            console.error(err);
            throw new Error("Erro ao calcular acurácia");
        }
    }
}
