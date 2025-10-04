"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcurracyService = void 0;
var AcurracyService = /** @class */ (function () {
    function AcurracyService(acurracyRepository) {
        this.acurracyRepository = acurracyRepository;
    }
    AcurracyService.prototype.getAcurracy = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var getAcurracy, simulados, disciplinasMap, totalAcertos, totalQuestoes, totalTempo, precisaoTotal, precisaoDisciplinas, tempoMedio, totalRespondidas, maiorSequencia;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.acurracyRepository.getAcurracy(id)];
                    case 1:
                        getAcurracy = _a.sent();
                        simulados = typeof getAcurracy === "string"
                            ? JSON.parse(getAcurracy)
                            : getAcurracy;
                        if (!simulados || simulados.length === 0) {
                            return [2 /*return*/, { message: "Nenhum simulado encontrado." }];
                        }
                        disciplinasMap = {};
                        totalAcertos = 0;
                        totalQuestoes = 0;
                        totalTempo = 0;
                        simulados.forEach(function (s) {
                            var _a;
                            // tempo_gasto é armazenado como string Date -> converter p/ segundos
                            var tempo = new Date(s.tempo_gasto).getTime() / 1000;
                            totalTempo += tempo;
                            (_a = s.resultados_por_disciplina) === null || _a === void 0 ? void 0 : _a.forEach(function (disc) {
                                totalAcertos += disc.acertos_disciplina;
                                totalQuestoes += disc.questoes_feitas_disciplina;
                                if (!disciplinasMap[disc.disciplina]) {
                                    disciplinasMap[disc.disciplina] = { acertos: 0, questoes: 0 };
                                }
                                disciplinasMap[disc.disciplina].acertos += disc.acertos_disciplina;
                                disciplinasMap[disc.disciplina].questoes += disc.questoes_feitas_disciplina;
                            });
                        });
                        precisaoTotal = ((totalAcertos / totalQuestoes) * 100).toFixed(2);
                        precisaoDisciplinas = Object.entries(disciplinasMap).map(function (_a) {
                            var disciplina = _a[0], dados = _a[1];
                            return ({
                                disciplina: disciplina,
                                acuracia: ((dados.acertos / dados.questoes) * 100).toFixed(2) + "%",
                                acertos: dados.acertos,
                                questoes: dados.questoes
                            });
                        });
                        tempoMedio = (totalTempo / simulados.length).toFixed(2);
                        totalRespondidas = simulados.reduce(function (sum, s) { return sum + s.questoes_feitas_totais; }, 0);
                        maiorSequencia = 0;
                        simulados.forEach(function (s) {
                            var _a;
                            var atual = 0;
                            (_a = s.respostas_simulado) === null || _a === void 0 ? void 0 : _a.forEach(function (resp) {
                                if (resp.acertou) {
                                    atual++;
                                    maiorSequencia = Math.max(maiorSequencia, atual);
                                }
                                else {
                                    atual = 0;
                                }
                            });
                        });
                        return [2 /*return*/, {
                                precisaoTotal: precisaoTotal + "%",
                                precisaoPorDisciplina: precisaoDisciplinas,
                                tempoTotalSegundos: totalTempo,
                                tempoMedioSegundos: tempoMedio,
                                totalRespondidas: totalRespondidas,
                                maiorSequenciaAcertos: maiorSequencia
                            }];
                }
            });
        });
    };
    return AcurracyService;
}());
exports.AcurracyService = AcurracyService;
