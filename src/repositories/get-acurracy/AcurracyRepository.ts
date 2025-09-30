import prisma from "../../database/mariadb";
import { IAcurracyRepository } from "../IMetricsRepository";

export class AccuracyRepository implements IAcurracyRepository { 
    async getAcurracy(id: any): Promise<String | any> {
        try {
            if(!id) {
                throw new Error("Deve ter um ID")
            }
            const simulados = await prisma.simulados_feitos.findMany({
                where: { id_usuario: id },
                include: {
                  respostas_simulado: true,
                  resultados_por_disciplina: true,
                },
              });
              
            return simulados
            
            }catch {
                console.log("erro")
            }
}}