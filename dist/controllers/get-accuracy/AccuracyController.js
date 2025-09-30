"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acurracy = void 0;
class Acurracy {
    constructor(acurracy) {
        this.acurracy = acurracy;
    }
    // Recebe o userId como parâmetro
    async handle(userId) {
        try {
            const acurracy = await this.acurracy.getAcurracy(userId);
            return acurracy;
        }
        catch (err) {
            console.error(err);
            throw new Error("Erro ao calcular acurácia");
        }
    }
}
exports.Acurracy = Acurracy;
