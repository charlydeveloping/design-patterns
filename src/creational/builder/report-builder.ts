import { SalesReport } from "./product";

export interface ReportBuilder {
  reset(): void;
  setTitle(title: string): void;
  setDateRange(dateRange: string): void;
  setCategory(category: string): void;
  setRegion(region: string): void;
  getResult(): SalesReport;
}