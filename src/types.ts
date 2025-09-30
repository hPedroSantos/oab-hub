export interface ResultadoPorDisciplina {
  disciplina: string;
  acertos_disciplina: number;
  questoes_feitas_disciplina: number;
}

export interface Simulado {
  id_simulados_feitos: number;
  id_usuario: string;
  acertos_totais: number;
  questoes_feitas_totais: number;
  tempo_gasto: Date;
  respostas_simulado: any[]; // ou interface específica se quiser detalhar
  resultados_por_disciplina: ResultadoPorDisciplina[];
}
