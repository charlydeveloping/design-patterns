import { SalesReport } from "./product";
import { ReportBuilder } from "./report-builder";

export class SimpleReportBuilder implements ReportBuilder {
  
  private report!: SalesReport;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.report = new SalesReport();
  }
  setTitle(title: string): void {
    this.report.title = title;
  }
  setDateRange(dateRange: string): void {
    this.report.dateRange = dateRange;
  }
  setCategory(category: string): void {
    this.report.category = category;  
  }
  setRegion(region: string): void {
    this.report.region = region;
  }
  getResult(): SalesReport {
    return this.report;
  }

}