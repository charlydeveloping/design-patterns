import { ReportDecorator } from "../report-decorator";

export class TimingReportDecorator extends ReportDecorator{
  generateReport(): string {
    console.log("LOG: Iniciando la medicion de tiempo")
    const startTime = Date.now();
    const result = this.wrapped.generateReport();
    const endTime = Date.now();
    console.log(`LOG: Reporte generado en ${endTime - startTime} ms`);
    return result;
  }

}