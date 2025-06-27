import { Notification } from "../notification";
import { NotificationFactory } from "./notification-factory";
import { SmsNotification } from "../sms-notification";

export class SmsNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SmsNotification();
  }
}