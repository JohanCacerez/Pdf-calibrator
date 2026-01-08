import { DataReport } from "./Types";
import { Report } from "./Report";

export class ReportFactory {
  CreateReport(data: DataReport): Report {
    if (!data) {
      throw new Error("Datos de reporte no proporcionados");
    }
    if (data.DATAFORMATVERSION !== "3") {
      throw new Error(
        `Versión de formato de datos no soportada: ${data.DATAFORMATVERSION}`
      );
    }
    if (data.FORMAT !== "mmdd") {
      throw new Error(`Formato de datos no soportado: ${data.FORMAT}`);
    }
    if (data.TIMEEND < data.TIMESTART) {
      throw new Error(
        `La hora de finalizacion es anterior a la hora de inicio: ${data.TIMEEND} < ${data.TIMESTART}`
      );
    }
    return new Report(data);
  }
}
