import prisma from "./database/mariadb";

async function metrics() {
  try {
    const userId = "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11";

    const simulados = await prisma.simulados_feitos.findMany({
      where: { id_usuario: userId },
      include: {
        respostas_simulado: true,
        resultados_por_disciplina: true,
      },
    });

    if (simulados.length === 0) {
      console.log("Nenhum simulado encontrado para este usuário.");
      return;
    }

    // Precisão geral
    const totalAcertos = simulados.reduce((acc, s) => acc + s.acertos_totais, 0);
    const totalQuestoes = simulados.reduce((acc, s) => acc + s.questoes_feitas_totais, 0);
    const precisaoTotal = totalQuestoes > 0 ? (totalAcertos / totalQuestoes) * 100 : 0;

    // Resumo por simulado
    const simuladosResumo = simulados.map(s => ({
      id_simulado: s.id_simulados_feitos,
      acertos: s.acertos_totais,
      questoesFeitas: s.questoes_feitas_totais,
      porcentagemAcertos: s.questoes_feitas_totais > 0 ? (s.acertos_totais / s.questoes_feitas_totais) * 100 : 0,
      disciplinas: s.resultados_por_disciplina.map(d => ({
        disciplina: d.disciplina,
        acertos: d.acertos_disciplina,
        questoesFeitas: d.questoes_feitas_disciplina,
        porcentagemAcertos: d.questoes_feitas_disciplina > 0 ? (d.acertos_disciplina / d.questoes_feitas_disciplina) * 100 : 0,
      }))
    }));

    // JSON final
    const resultado = {
      precisaoTotal: precisaoTotal.toFixed(2) + "%",
      simulados: simuladosResumo,
    };

    console.log(JSON.stringify(resultado, null, 2));

  } catch (err) {
    console.error("Erro:", err);
  }
}

metrics();
