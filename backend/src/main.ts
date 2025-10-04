import express from "express";
import { config } from "dotenv";
import metricsRouters from "./routes/metricsRoutes";


const main = async () => {
  config(); // carrega variáveis de ambiente
  const app = express();

  app.use(express.json()); // habilita parsing de JSON
  
  app.use(metricsRouters); // importa suas rotas

  const PORT: number = process.env.PORT ? Number(process.env.PORT) : 3000;
  app.listen(PORT, "0.0.0.0",() => {
    console.log(`escutando na porta ${PORT}`);
  });
};

main();
