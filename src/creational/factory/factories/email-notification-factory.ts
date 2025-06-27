import { EmailNotification } from "../email-notification";
import { Notification } from "../notification";
import { NotificationFactory } from "./notification-factory";

export class EmailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }

}