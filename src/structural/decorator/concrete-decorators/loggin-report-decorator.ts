import { ReportDecorator } from "../report-decorator";

export class LogginReportDecorator extends ReportDecorator {
  generateReport(): string {
    console.log("LOG: generando reporte")
    const result = this.wrapped.generateReport();
    console.log("LOG: reporte generado exitosamente");
    return result;
  }

}