import { ReportBuilder } from "./report-builder";

export class ReportDirector {
  constructor(private builder: ReportBuilder) {}

  changeBuilder(builder: ReportBuilder): void {
    this.builder = builder;
  }

  makeSimpleReport(title: string, dateRange: string): void {
    this.builder.setTitle(title);
    this.builder.setDateRange(dateRange);
  }

  makeDetailedReport(
    title: string,
    dateRange: string,
    category: string,
    region: string
  ): void {
    this.builder.setTitle(title);
    this.builder.setDateRange(dateRange);
    this.builder.setCategory(category);
    this.builder.setRegion(region);
  }
}