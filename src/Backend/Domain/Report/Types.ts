export interface FuncReport {
  tipo: string;
  name: string;
  grupo: string;
  subgrupo: string;
  descripcion: string;
  campo: string;
  resultado: string;
  medido: string;
  limite_bajo: string;
  limite_alto: string;
  unidad: string;
}

export interface DataReport {
  DATAFORMATVERSION: string;
  FORMAT: string;
  START: string;
  TIMESTART: string;
  SWVERSION: string;
  LOT: string;
  FIXTURECODE: string;
  SYSNAME: string;
  FIXTURENAME: string;
  CARRIERNAME: string;
  TOPPLATENAME: string;
  CUSTOMINFO1: string;
  CUSTOMINFO2: string;
  FUNC: FuncReport[];
  BOARDRESULT: string;
  TIMEEND: string;
  END: string;
}
