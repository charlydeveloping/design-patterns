import { LogginReportDecorator } from "./concrete-decorators/loggin-report-decorator";
import { TimingReportDecorator } from "./concrete-decorators/timing-report-decorator";
import { ReportService } from "./report-service";

const baseService = new ReportService();
const logginService = new LogginReportDecorator(baseService);
const timingService = new TimingReportDecorator(logginService);

console.log(timingService.generateReport());
