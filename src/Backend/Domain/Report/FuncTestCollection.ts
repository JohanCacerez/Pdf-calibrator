import { FuncTest } from "./FuncTest";
import { FuncReport } from "./Types";

export class FuncTestCollection {
  private readonly tests: FuncTest[];

  private constructor(tests: FuncTest[]) {
    this.tests = tests;
  }

  static create(reports: FuncReport[]): FuncTestCollection {
    if (!reports || reports.length === 0) {
      throw new Error("El reporte FUNC no contiene pruebas");
    }

    const tests = reports.map((report) => FuncTest.create(report));

    return new FuncTestCollection(tests);
  }

  getAll(): FuncTest[] {
    return [...this.tests];
  }

  getPassed(): FuncTest[] {
    return this.tests.filter((t) => t.resultado === "PASS");
  }

  getFailed(): FuncTest[] {
    return this.tests.filter((t) => t.resultado !== "PASS");
  }

  count(): number {
    return this.tests.length;
  }
}
