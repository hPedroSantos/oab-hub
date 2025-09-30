"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcurracyService = void 0;
class AcurracyService {
    constructor(acurracyRepository) {
        this.acurracyRepository = acurracyRepository;
    }
    async getAcurracy(id) {
        const getAcurracy = await this.acurracyRepository.getAcurracy(id);
        const simulados = typeof getAcurracy === "string"
            ? JSON.parse(getAcurracy)
            : getAcurracy;
        if (!simulados || simulados.length === 0) {
            return { message: "Nenhum simulado encontrado." };
        }
        // ---- Precisão por disciplina ----
        const disciplinasMap = {};
        let totalAcertos = 0;
        let totalQuestoes = 0;
        let totalTempo = 0;
        simulados.forEach((s) => {
            // tempo_gasto é armazenado como string Date -> converter p/ segundos
            const tempo = new Date(s.tempo_gasto).getTime() / 1000;
            totalTempo += tempo;
            s.resultados_por_disciplina?.forEach((disc) => {
                totalAcertos += disc.acertos_disciplina;
                totalQuestoes += disc.questoes_feitas_disciplina;
                if (!disciplinasMap[disc.disciplina]) {
                    disciplinasMap[disc.disciplina] = { acertos: 0, questoes: 0 };
                }
                disciplinasMap[disc.disciplina].acertos += disc.acertos_disciplina;
                disciplinasMap[disc.disciplina].questoes += disc.questoes_feitas_disciplina;
            });
        });
        const precisaoTotal = ((totalAcertos / totalQuestoes) * 100).toFixed(2);
        const precisaoDisciplinas = Object.entries(disciplinasMap).map(([disciplina, dados]) => ({
            disciplina,
            acuracia: ((dados.acertos / dados.questoes) * 100).toFixed(2) + "%",
            acertos: dados.acertos,
            questoes: dados.questoes
        }));
        // ---- Tempo ----
        const tempoMedio = (totalTempo / simulados.length).toFixed(2);
        // ---- Questões respondidas ----
        const totalRespondidas = simulados.reduce((sum, s) => sum + s.questoes_feitas_totais, 0);
        // ---- Acertos consecutivos ----
        let maiorSequencia = 0;
        simulados.forEach((s) => {
            let atual = 0;
            s.respostas_simulado?.forEach((resp) => {
                if (resp.acertou) {
                    atual++;
                    maiorSequencia = Math.max(maiorSequencia, atual);
                }
                else {
                    atual = 0;
                }
            });
        });
        return {
            precisaoTotal: precisaoTotal + "%",
            precisaoPorDisciplina: precisaoDisciplinas,
            tempoTotalSegundos: totalTempo,
            tempoMedioSegundos: tempoMedio,
            totalRespondidas,
            maiorSequenciaAcertos: maiorSequencia
        };
    }
}
exports.AcurracyService = AcurracyService;
