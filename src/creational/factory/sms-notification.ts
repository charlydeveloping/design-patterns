import { Notification } from "./notification";

export class SmsNotification implements Notification {
  send(recipient: string, message: string): void {
    console.log(`Enviando SMS a ${recipient}: ${message}`);
  }

}