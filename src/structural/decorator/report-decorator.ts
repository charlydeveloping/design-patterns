import { IReportService } from "./report-service";

export abstract class ReportDecorator implements IReportService {
  constructor(protected wrapped: IReportService) {}
  
  abstract generateReport(): string

}