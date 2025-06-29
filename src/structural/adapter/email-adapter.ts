import { ExternalEmailService } from "./external-email-service";
import { INotification } from "./notification.interface";

export class EmailAdapter implements INotification {
  private emailService: ExternalEmailService;

  constructor() {
    this.emailService = new ExternalEmailService()
  }

  send(to: string, message: string): void {
    this.emailService.sendEmailTo(to, message);
  }

}