import { Notification } from "../notification";

export abstract class NotificationFactory {
  abstract createNotification(): Notification;

  public notify(recipient: string, message: string): void {
    const notification = this.createNotification();
    notification.send(recipient, message);
  }
}