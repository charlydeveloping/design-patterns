import { Notification } from "./notification";

export class EmailNotification implements Notification {
  send(recipient: string, message: string): void {
    console.log(`Enviando email a ${recipient}: ${message}`);
  }

}