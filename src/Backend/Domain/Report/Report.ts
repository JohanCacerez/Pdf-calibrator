import { DataReport, FuncReport } from "./Types";

export class Report implements DataReport {
  public readonly DATAFORMATVERSION: string;
  public readonly FORMAT: string;
  public readonly START: string;
  public readonly TIMESTART: string;
  public readonly SWVERSION: string;
  public readonly LOT: string;
  public readonly FIXTURECODE: string;
  public readonly SYSNAME: string;
  public readonly FIXTURENAME: string;
  public readonly CARRIERNAME: string;
  public readonly TOPPLATENAME: string;
  public readonly CUSTOMINFO1: string;
  public readonly CUSTOMINFO2: string;
  public readonly FUNC: FuncReport[];
  public readonly BOARDRESULT: string;
  public readonly TIMEEND: string;
  public readonly END: string;

  constructor(data: DataReport) {
    this.DATAFORMATVERSION = data.DATAFORMATVERSION;
    this.FORMAT = data.FORMAT;
    this.START = data.START;
    this.TIMESTART = data.TIMESTART;
    this.SWVERSION = data.SWVERSION;
    this.LOT = data.LOT;
    this.FIXTURECODE = data.FIXTURECODE;
    this.SYSNAME = data.SYSNAME;
    this.FIXTURENAME = data.FIXTURENAME;
    this.CARRIERNAME = data.CARRIERNAME;
    this.TOPPLATENAME = data.TOPPLATENAME;
    this.CUSTOMINFO1 = data.CUSTOMINFO1;
    this.CUSTOMINFO2 = data.CUSTOMINFO2;
    this.FUNC = [...data.FUNC];
    this.BOARDRESULT = data.BOARDRESULT;
    this.TIMEEND = data.TIMEEND;
    this.END = data.END;

    Object.freeze(this);
  }
}
