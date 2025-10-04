import { useState, useEffect } from "react";
import Header from "@/components/Header";
import SubjectFilter from "@/components/SubjectFilter";
import StatsCard from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, BarChart3, Target, Zap } from "lucide-react";
import axios from "axios";

type Subject = {
  id: string;
  name: string;
  questionCount: number;
  color: string;
};

type Question = {
  id: string;
  text: string;
  subject: string;
  alternatives: { id: string; text: string }[];
  correctLetter: string;
};

type Stats = {
  totalQuestions: number;
  correctAnswers: number;
  averageTime: string;
  currentStreak: number;
  subjectStats: {
    subject: string;
    correct: number;
    total: number;
    accuracy: number;
  }[];
};

type QuestaoAPI = {
  id_questoes: string;
  texto: string;
  disciplina: string;
  alternativas: string; // JSON string ou texto puro
  gabarito: string;
};

type ViewMode = "home" | "filter" | "practice" | "stats";

const USER_ID = "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"; // Troque pelo id real do usuário

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewMode>("home");
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Carrega disciplinas ao montar
  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      try {
        const res = await axios.post<{ questoes: QuestaoAPI[] }>(
          "/api/v1/questoes-agrupadas",
          { disciplinas: ["Direito Constitucional", "Direito Penal", "Direito Civil"] }
        );
        setSubjects(
          res.data.questoes.reduce((acc: Subject[], q: QuestaoAPI) => {
            const subj = acc.find((s) => s.name === q.disciplina);
            if (subj) {
              subj.questionCount += 1;
            } else {
              acc.push({
                id: q.disciplina,
                name: q.disciplina,
                questionCount: 1,
                color: "primary",
              });
            }
            return acc;
          }, [])
        );
      } catch (err) {
        // Trate erro
      }
      setLoading(false);
    };
    fetchSubjects();
  }, []);

  // Carrega estatísticas ao entrar na tela de stats
  useEffect(() => {
    if (currentView !== "stats") return;
    const fetchStats = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/v1/acurracy/${USER_ID}`);
        const dados = res.data;
        setStats({
          totalQuestions: dados.totalRespondidas,
          correctAnswers: (dados.precisaoPorDisciplina || []).reduce(
            (acc: number, d) => acc + d.acertos,
            0
          ),
          averageTime: `${Number(dados.tempoMedioSegundos).toFixed(2)}s`,
          currentStreak: dados.maiorSequenciaAcertos,
          subjectStats: (dados.precisaoPorDisciplina || []).map((d) => ({
            subject: d.disciplina,
            correct: d.acertos,
            total: d.questoes,
            accuracy: parseFloat(
              typeof d.acuracia === "string"
                ? d.acuracia.replace("%", "")
                : d.acuracia
            ),
          })),
        });
      } catch (err) {
        setStats(null);
      }
      setLoading(false);
    };
    fetchStats();
  }, [currentView]);

  // Reset de estados ao trocar de tela
  useEffect(() => {
    if (currentView !== "practice") {
      setSelected(null);
      setShowResult(false);
      setCurrentQuestionIndex(0);
    }
    if (currentView !== "stats") {
      setStats(null);
    }
  }, [currentView]);

  // Carrega questões para prática
  const handleStartPractice = async () => {
    setLoading(true);
    try {
      const res = await axios.post<{ questoes: QuestaoAPI[] }>(
        "/api/v1/questoes-agrupadas",
        { disciplinas: selectedSubjects }
      );
      setQuestions(
        res.data.questoes.map((q: QuestaoAPI) => {
          let alternatives: { id: string; text: string }[] = [];
          try {
            const alternativasObj = JSON.parse(q.alternativas) as Record<string, string>;
            alternatives = Object.entries(alternativasObj).map(
              ([key, value]) => ({
                id: key.toUpperCase(),
                text: value,
              })
            );
          } catch {
            // Se não for JSON, trata como alternativa única (texto puro)
            alternatives = [{ id: "A", text: q.alternativas }];
          }
          return {
            id: q.id_questoes,
            text: q.texto,
            subject: q.disciplina,
            alternatives,
            correctLetter: q.gabarito.trim().toUpperCase(),
          };
        })
      );
      setCurrentQuestionIndex(0);
      setSelected(null);
      setShowResult(false);
      setCurrentView("practice");
    } catch (err) {
      // Trate erro
    }
    setLoading(false);
  };

  const handleSubjectToggle = (subjectId: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subjectId)
        ? prev.filter((id) => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  // Renderização das views
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Carregando...
      </div>
    );
  }

  if (currentView === "practice" && questions.length > 0) {
    const question = questions[currentQuestionIndex];

    const handleSelect = (altId: string) => {
      setSelected(altId);
      setShowResult(true);
    };

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">{question.subject}</h2>
            <div className="text-xl mb-4">{question.text}</div>
            <div className="space-y-2">
              {question.alternatives.map((alt) => (
                <button
                  key={alt.id}
                  className={`block w-full text-left p-4 rounded border
                    ${
                      selected === alt.id
                        ? alt.id === question.correctLetter
                          ? "bg-green-100 border-green-500"
                          : "bg-red-100 border-red-500"
                        : "bg-white border-gray-300 hover:bg-gray-50"
                    }
                  `}
                  disabled={showResult}
                  onClick={() => handleSelect(alt.id)}
                >
                  <b>{alt.id}</b> {alt.text}
                </button>
              ))}
            </div>
            {showResult && (
              <div className="mt-4">
                {selected === question.correctLetter ? (
                  <span className="text-green-600 font-bold">Correto!</span>
                ) : (
                  <span className="text-red-600 font-bold">
                    Incorreto. Resposta certa: {question.correctLetter}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                setShowResult(false);
                setSelected(null);
                setCurrentQuestionIndex((i) => Math.max(i - 1, 0));
              }}
              disabled={currentQuestionIndex === 0}
            >
              Anterior
            </Button>
            <Button
              onClick={() => {
                setShowResult(false);
                setSelected(null);
                if (currentQuestionIndex < questions.length - 1) {
                  setCurrentQuestionIndex((i) => i + 1);
                } else {
                  setCurrentView("stats");
                }
              }}
              disabled={!showResult}
            >
              Próxima
            </Button>
          </div>
        </main>
      </div>
    );
  }

  if (currentView === "stats" && stats) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Suas Estatísticas</h1>
            <p className="text-muted-foreground">
              Acompanhe seu progresso nos estudos
            </p>
          </div>
          <StatsCard {...stats} />
          <div className="text-center">
            <Button
              onClick={() => setCurrentView("home")}
              className="gradient-oab text-white"
            >
              Voltar ao Início
            </Button>
          </div>
        </main>
      </div>
    );
  }

  if (currentView === "filter") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold">
                Configurar Sessão de Estudo
              </h1>
              <p className="text-muted-foreground">
                Escolha as áreas que deseja praticar
              </p>
            </div>
            <SubjectFilter
              subjects={subjects}
              selectedSubjects={selectedSubjects}
              onSubjectToggle={handleSubjectToggle}
              onClearFilters={() => setSelectedSubjects([])}
              onStartPractice={handleStartPractice}
            />
            <div className="text-center">
              <Button variant="outline" onClick={() => setCurrentView("home")}>
                Voltar
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Home view
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-soft opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Prepare-se para a
              <span className="gradient-oab bg-clip-text text-transparent">
                {" "}
                OAB
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Pratique questões, acompanhe seu progresso e conquiste sua
              aprovação com a plataforma mais moderna para estudantes de
              direito.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-oab text-white shadow-strong hover:shadow-medium transition-all text-lg px-8"
                onClick={() => setCurrentView("filter")}
              >
                <Zap className="w-5 h-5 mr-2" />
                Começar a Praticar
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8"
                onClick={() => setCurrentView("stats")}
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Ver Estatísticas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold">
              Por que escolher o OAB Quest Hub?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ferramentas modernas para maximizar seu aprendizado e acelerar sua
              aprovação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center space-y-4 shadow-soft hover:shadow-medium transition-all">
              <div className="w-16 h-16 mx-auto gradient-oab rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Questões Atualizadas</h3>
              <p className="text-muted-foreground">
                Base completa com questões das últimas provas da OAB,
                organizadas por tema e dificuldade
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 shadow-soft hover:shadow-medium transition-all">
              <div className="w-16 h-16 mx-auto gradient-brasil rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Foco no que Importa</h3>
              <p className="text-muted-foreground">
                Identifique suas dificuldades e concentre seus estudos nos temas
                que mais precisam de atenção
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 shadow-soft hover:shadow-medium transition-all">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Progresso Detalhado</h3>
              <p className="text-muted-foreground">
                Acompanhe sua evolução com estatísticas completas e relatórios
                de desempenho personalizados
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Pronto para começar?</h2>
            <p className="text-lg text-muted-foreground">
              Junte-se aos milhares de estudantes que já estão se preparando com
              nossa plataforma
            </p>
            <Button
              size="lg"
              className="gradient-oab text-white shadow-strong hover:shadow-medium transition-all text-lg px-8"
              onClick={() => setCurrentView("filter")}
            >
              Iniciar Jornada de Estudos
              <span className="ml-2">🎯</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;