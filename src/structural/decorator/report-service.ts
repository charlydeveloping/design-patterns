export interface IReportService {
  generateReport(): string;
}

export class ReportService implements IReportService {
  generateReport(): string {
    return "Reporte de ventas"
  }
}