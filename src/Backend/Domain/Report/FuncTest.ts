import { FuncReport } from "./Types";

export class FuncTest implements FuncReport {
  public readonly tipo: string;
  public readonly name: string;
  public readonly grupo: string;
  public readonly subgrupo: string;
  public readonly descripcion: string;
  public readonly campo: string;
  public readonly resultado: string;
  public readonly medido: string;
  public readonly limite_bajo: string;
  public readonly limite_alto: string;
  public readonly unidad: string;

  private constructor(data: FuncReport) {
    this.tipo = data.tipo;
    this.name = data.name;
    this.grupo = data.grupo;
    this.subgrupo = data.subgrupo;
    this.descripcion = data.descripcion;
    this.campo = data.campo;
    this.resultado = data.resultado;
    this.medido = data.medido;
    this.limite_bajo = data.limite_bajo;
    this.limite_alto = data.limite_alto;
    this.unidad = data.unidad;
  }

  static create(data: FuncReport): FuncTest {
    if (!data) {
      throw new Error("Datos del test no proporcionados");
    }

    const requiredFields: Array<keyof FuncReport> = [
      "tipo",
      "name",
      "grupo",
      "subgrupo",
      "descripcion",
      "resultado",
      "medido",
      "limite_bajo",
      "limite_alto",
      "unidad",
    ];

    for (const field of requiredFields) {
      if (!data[field] || data[field].trim() === "") {
        throw new Error(`Campo ${field} no proporcionado`);
      }
    }

    return new FuncTest(data);
  }
}
