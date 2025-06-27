import { DetailedReportBuilder } from "./detailed-report-builder";
import { ReportBuilder } from "./report-builder";
import { ReportDirector } from "./report-director";
import { SimpleReportBuilder } from "./simple-report-builder";

const simpleBuilder: ReportBuilder = new SimpleReportBuilder();
const director = new ReportDirector(simpleBuilder);
director.makeSimpleReport("Reporte de Ventas", "T1 2025");
const simpleReport = simpleBuilder.getResult();
simpleReport.show();

const detailedBuilder: ReportBuilder = new DetailedReportBuilder();
director.changeBuilder(detailedBuilder);
director.makeDetailedReport(
  "Reporte de Ventas Detallado",
  "T1 2025",
  "Electrónica",
  "Norte"
);

const detailedReport = detailedBuilder.getResult();
detailedReport.show();