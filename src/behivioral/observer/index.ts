import { AnalyticsObserver } from "./concrete-subscribers/analytics-observer";
import { EmailObserver } from "./concrete-subscribers/email-observer";
import { InventoryObserver } from "./concrete-subscribers/inventory-observer";
import { OrderSubject } from "./order-subject";

const subject = new OrderSubject();

subject.attach(new EmailObserver());
subject.attach(new InventoryObserver());
subject.attach(new AnalyticsObserver());

const orderId = 123;

console.log(`Pedido #${orderId} creado en el sistema`)
subject.notify(orderId);